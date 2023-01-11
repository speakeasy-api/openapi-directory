import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomerContracts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createContract - Create a new contract
     *
     * Now you are ready to create your contract. Before that, please ensure that you check the offer with the same request parameterts. /offers
     *
    **/
    createContract(req: operations.CreateContractRequest, config?: AxiosRequestConfig): Promise<operations.CreateContractResponse>;
    /**
     * deleteNextContract - Delete your next contract
    **/
    deleteNextContract(config?: AxiosRequestConfig): Promise<operations.DeleteNextContractResponse>;
    /**
     * getBillingPeriods - Get billing periods conditions
    **/
    getBillingPeriods(req: operations.GetBillingPeriodsRequest, config?: AxiosRequestConfig): Promise<operations.GetBillingPeriodsResponse>;
    /**
     * getContracts - Get contract list
    **/
    getContracts(req: operations.GetContractsRequest, config?: AxiosRequestConfig): Promise<operations.GetContractsResponse>;
    /**
     * getOffer - Get offer pricing
     *
     * Get the offer pricing then you can create your contract with the same request parameters. /v2/user/customer/contracts
     *
    **/
    getOffer(req: operations.GetOfferRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferResponse>;
    /**
     * getStandardOffers - Get all standard offers
    **/
    getStandardOffers(req: operations.GetStandardOffersRequest, config?: AxiosRequestConfig): Promise<operations.GetStandardOffersResponse>;
    /**
     * reactivateCurrentContract - Reactivate your terminated contract.
     *
     * By calling this operation you can re-enable the auto renewal.
    **/
    reactivateCurrentContract(config?: AxiosRequestConfig): Promise<operations.ReactivateCurrentContractResponse>;
    /**
     * terminateCurrentContract - Schedule termination of your current contract at the end of the commitment.
     *
     * By default your contract are automatically renew. By calling this operation you can disable the auto renewal.
    **/
    terminateCurrentContract(req: operations.TerminateCurrentContractRequest, config?: AxiosRequestConfig): Promise<operations.TerminateCurrentContractResponse>;
}
