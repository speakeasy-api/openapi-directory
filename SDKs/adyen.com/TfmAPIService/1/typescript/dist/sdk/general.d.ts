import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class General {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Assign terminals
     *
     * @remarks
     * Assigns one or more payment terminals to a merchant account or a store. You can also use this endpoint to reassign terminals between merchant accounts or stores, and to unassign a terminal and return it to company inventory.
     */
    postAssignTerminals(req: shared.AssignTerminalsRequest, security: operations.PostAssignTerminalsSecurity, config?: AxiosRequestConfig): Promise<operations.PostAssignTerminalsResponse>;
    /**
     * Get the account or store of a terminal
     *
     * @remarks
     * Returns the company account, merchant account, or store that a payment terminal is assigned to.
     */
    postFindTerminal(req: shared.FindTerminalRequest, security: operations.PostFindTerminalSecurity, config?: AxiosRequestConfig): Promise<operations.PostFindTerminalResponse>;
    /**
     * Get the stores of an account
     *
     * @remarks
     * Returns a list of stores associated with a company account or a merchant account, including the status of each store.
     */
    postGetStoresUnderAccount(req: shared.GetStoresUnderAccountRequest, security: operations.PostGetStoresUnderAccountSecurity, config?: AxiosRequestConfig): Promise<operations.PostGetStoresUnderAccountResponse>;
    /**
     * Get the details of a terminal
     *
     * @remarks
     * Returns the details of a payment terminal, including where the terminal is assigned to. The response returns the same details that are provided in the terminal list in your Customer Area and in the Terminal Fleet report.
     */
    postGetTerminalDetails(req: shared.GetTerminalDetailsRequest, security: operations.PostGetTerminalDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.PostGetTerminalDetailsResponse>;
    /**
     * Get the list of terminals
     *
     * @remarks
     * Returns a list of payment terminals associated with a company account, merchant account, or store. The response shows whether the terminals are in the inventory, or in-store (ready for boarding or already boarded).
     */
    postGetTerminalsUnderAccount(req: shared.GetTerminalsUnderAccountRequest, security: operations.PostGetTerminalsUnderAccountSecurity, config?: AxiosRequestConfig): Promise<operations.PostGetTerminalsUnderAccountResponse>;
}
