import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Create and manage billing resources
 */
export declare class Billing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve or search billing profiles
     */
    billingProfilesList(req: operations.BillingProfilesListRequest, security: operations.BillingProfilesListSecurity, config?: AxiosRequestConfig): Promise<operations.BillingProfilesListResponse>;
    /**
     * Retrieve an existing billing profiles
     */
    billingProfilesRead(req: operations.BillingProfilesReadRequest, security: operations.BillingProfilesReadSecurity, config?: AxiosRequestConfig): Promise<operations.BillingProfilesReadResponse>;
    /**
     * Create communication (phone call) logs
     */
    commLogsCreate(req: operations.CommLogsCreateRequest, security: operations.CommLogsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CommLogsCreateResponse>;
    /**
     * Retrieve or search communicatioin (phone call) logs
     */
    commLogsList(req: operations.CommLogsListRequest, security: operations.CommLogsListSecurity, config?: AxiosRequestConfig): Promise<operations.CommLogsListResponse>;
    /**
     * Update an existing communication (phone call) logs
     */
    commLogsPartialUpdate(req: operations.CommLogsPartialUpdateRequest, security: operations.CommLogsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CommLogsPartialUpdateResponse>;
    /**
     * Retrieve an existing communication (phone call) logs
     */
    commLogsRead(req: operations.CommLogsReadRequest, security: operations.CommLogsReadSecurity, config?: AxiosRequestConfig): Promise<operations.CommLogsReadResponse>;
    /**
     * Update an existing communication (phone call) logs
     */
    commLogsUpdate(req: operations.CommLogsUpdateRequest, security: operations.CommLogsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CommLogsUpdateResponse>;
    /**
     * Retrieve or search custom insurance plan names
     */
    customInsurancePlanNamesList(req: operations.CustomInsurancePlanNamesListRequest, security: operations.CustomInsurancePlanNamesListSecurity, config?: AxiosRequestConfig): Promise<operations.CustomInsurancePlanNamesListResponse>;
    /**
     * Retrieve an existing custom insurance plan name
     */
    customInsurancePlanNamesRead(req: operations.CustomInsurancePlanNamesReadRequest, security: operations.CustomInsurancePlanNamesReadSecurity, config?: AxiosRequestConfig): Promise<operations.CustomInsurancePlanNamesReadResponse>;
    /**
     * Retrieve or search past eligibility checks for patient
     */
    eligibilityChecksList(req: operations.EligibilityChecksListRequest, security: operations.EligibilityChecksListSecurity, config?: AxiosRequestConfig): Promise<operations.EligibilityChecksListResponse>;
    /**
     * Retrieve an existing past eligibility check
     */
    eligibilityChecksRead(req: operations.EligibilityChecksReadRequest, security: operations.EligibilityChecksReadSecurity, config?: AxiosRequestConfig): Promise<operations.EligibilityChecksReadResponse>;
    /**
     * Create billing line item for appointments
     */
    lineItemsCreate(req: operations.LineItemsCreateRequest, security: operations.LineItemsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.LineItemsCreateResponse>;
    lineItemsDelete(req: operations.LineItemsDeleteRequest, security: operations.LineItemsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.LineItemsDeleteResponse>;
    /**
     * Retrieve or search billing line items
     */
    lineItemsList(req: operations.LineItemsListRequest, security: operations.LineItemsListSecurity, config?: AxiosRequestConfig): Promise<operations.LineItemsListResponse>;
    lineItemsPartialUpdate(req: operations.LineItemsPartialUpdateRequest, security: operations.LineItemsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.LineItemsPartialUpdateResponse>;
    /**
     * Retrieve an existing billing line item
     */
    lineItemsRead(req: operations.LineItemsReadRequest, security: operations.LineItemsReadSecurity, config?: AxiosRequestConfig): Promise<operations.LineItemsReadResponse>;
    lineItemsUpdate(req: operations.LineItemsUpdateRequest, security: operations.LineItemsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.LineItemsUpdateResponse>;
    /**
     * Retrieve or search patient payment logs
     */
    patientPaymentLogList(req: operations.PatientPaymentLogListRequest, security: operations.PatientPaymentLogListSecurity, config?: AxiosRequestConfig): Promise<operations.PatientPaymentLogListResponse>;
    /**
     * Retrieve an existing patient payment log
     */
    patientPaymentLogRead(req: operations.PatientPaymentLogReadRequest, security: operations.PatientPaymentLogReadSecurity, config?: AxiosRequestConfig): Promise<operations.PatientPaymentLogReadResponse>;
    /**
     * Create patient payment
     */
    patientPaymentsCreate(req: operations.PatientPaymentsCreateRequest, security: operations.PatientPaymentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PatientPaymentsCreateResponse>;
    /**
     * Retrieve or search patient payments
     */
    patientPaymentsList(req: operations.PatientPaymentsListRequest, security: operations.PatientPaymentsListSecurity, config?: AxiosRequestConfig): Promise<operations.PatientPaymentsListResponse>;
    /**
     * Retrieve an existing patient payment
     */
    patientPaymentsRead(req: operations.PatientPaymentsReadRequest, security: operations.PatientPaymentsReadSecurity, config?: AxiosRequestConfig): Promise<operations.PatientPaymentsReadResponse>;
    proceduresList(req: operations.ProceduresListRequest, security: operations.ProceduresListSecurity, config?: AxiosRequestConfig): Promise<operations.ProceduresListResponse>;
    proceduresRead(req: operations.ProceduresReadRequest, security: operations.ProceduresReadSecurity, config?: AxiosRequestConfig): Promise<operations.ProceduresReadResponse>;
    /**
     * Retrieve or search insurance transactions associated with billing line items
     */
    transactionsList(req: operations.TransactionsListRequest, security: operations.TransactionsListSecurity, config?: AxiosRequestConfig): Promise<operations.TransactionsListResponse>;
    /**
     * Retrieve an existing insurance transaction
     */
    transactionsRead(req: operations.TransactionsReadRequest, security: operations.TransactionsReadSecurity, config?: AxiosRequestConfig): Promise<operations.TransactionsReadResponse>;
}
