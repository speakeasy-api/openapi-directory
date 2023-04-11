import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomerContracts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a new contract
     *
     * @remarks
     * Now you are ready to create your contract. Before that, please ensure that you check the offer with the same request parameterts. /offers
     *
     */
    createContract(req: shared.OfferRequest, config?: AxiosRequestConfig): Promise<operations.CreateContractResponse>;
    /**
     * Delete your next contract
     */
    deleteNextContract(config?: AxiosRequestConfig): Promise<operations.DeleteNextContractResponse>;
    /**
     * Get billing periods conditions
     */
    getBillingPeriods(req: operations.GetBillingPeriodsRequest, config?: AxiosRequestConfig): Promise<operations.GetBillingPeriodsResponse>;
    /**
     * Get contract list
     */
    getContracts(req: operations.GetContractsRequest, config?: AxiosRequestConfig): Promise<operations.GetContractsResponse>;
    /**
     * Get offer pricing
     *
     * @remarks
     * Get the offer pricing then you can create your contract with the same request parameters. /v2/user/customer/contracts
     *
     */
    getOffer(req: shared.OfferRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferResponse>;
    /**
     * Get all standard offers
     */
    getStandardOffers(req: operations.GetStandardOffersRequest, config?: AxiosRequestConfig): Promise<operations.GetStandardOffersResponse>;
    /**
     * Reactivate your terminated contract.
     *
     * @remarks
     * By calling this operation you can re-enable the auto renewal.
     */
    reactivateCurrentContract(config?: AxiosRequestConfig): Promise<operations.ReactivateCurrentContractResponse>;
    /**
     * Schedule termination of your current contract at the end of the commitment.
     *
     * @remarks
     * By default your contract are automatically renew. By calling this operation you can disable the auto renewal.
     */
    terminateCurrentContract(req: shared.TerminateContract, config?: AxiosRequestConfig): Promise<operations.TerminateCurrentContractResponse>;
}
