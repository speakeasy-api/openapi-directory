import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DirectDebits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * activateMandate - Activate a direct debit mandate
     *
     * This endpoint can only be used to activate a direct debit mandate when it is in the status REJECT_REQUESTED (even if the account has direct debits disabled). This action will also enable the account for direct debits if it was previously set to be disabled.
     * The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_ACTIVATE
     *
    **/
    activateMandate(req: operations.ActivateMandateRequest, config?: AxiosRequestConfig): Promise<operations.ActivateMandateResponse>;
    /**
     * cancelMandateByUuid - Cancel a direct debit mandate
     *
     * This endpoint allows you to cancel a direct debit mandate.
     * The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_CANCEL
     *
    **/
    cancelMandateByUuid(req: operations.CancelMandateByUuidRequest, config?: AxiosRequestConfig): Promise<operations.CancelMandateByUuidResponse>;
    /**
     * getDirectDebitByUuid - Get the deails of a direct debit
     *
     * Retrieve all details of a single direct debit collection/payment, whether successful or not.
     * The permision needed to access this endpoint is **PERM_BUSINESS_GET_DIRECT_DEBIT**
     *
    **/
    getDirectDebitByUuid(req: operations.GetDirectDebitByUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetDirectDebitByUuidResponse>;
    /**
     * getDirectDebitMandates - List all direct debit mandates
     *
     * The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATES
     *
    **/
    getDirectDebitMandates(config?: AxiosRequestConfig): Promise<operations.GetDirectDebitMandatesResponse>;
    /**
     * getDirectDebitsForMandateUuid - Get all DD payments associated with a direct debit mandate
     *
     * Retrieve all direct debit payments associated with a direct debit mandate.
     * The permision needed to access this endpoint is PERM_BUSINESS_GET_DIRECT_DEBITS
     *
    **/
    getDirectDebitsForMandateUuid(req: operations.GetDirectDebitsForMandateUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetDirectDebitsForMandateUuidResponse>;
    /**
     * getMandate - Get direct debit mandate details
     *
     * Retrieve all details for a direct debit mandate.
     * The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATE
     *
    **/
    getMandate(req: operations.GetMandateRequest, config?: AxiosRequestConfig): Promise<operations.GetMandateResponse>;
    /**
     * rejectDirectDebit - Reject a direct debit payment
     *
     * This endpoint allows you to reject a direct debit payment where the status is still set to RECEIVED.
     * Permission name PERM_BUSINESS_POST_DIRECT_DEBIT_REJECT
     *
    **/
    rejectDirectDebit(req: operations.RejectDirectDebitRequest, config?: AxiosRequestConfig): Promise<operations.RejectDirectDebitResponse>;
    /**
     * updateMandateAlias - Update a direct debit mandate alias
     *
     * Update Direct Debit Mandate Alias
     * The permision needed to access this endpoint is PERM_BUSINESS_PUT_MANDATE
     *
    **/
    updateMandateAlias(req: operations.UpdateMandateAliasRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMandateAliasResponse>;
}
