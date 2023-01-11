import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Billing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * billingProfilesList - Retrieve or search billing profiles
    **/
    billingProfilesList(req: operations.BillingProfilesListRequest, config?: AxiosRequestConfig): Promise<operations.BillingProfilesListResponse>;
    /**
     * billingProfilesRead - Retrieve an existing billing profiles
    **/
    billingProfilesRead(req: operations.BillingProfilesReadRequest, config?: AxiosRequestConfig): Promise<operations.BillingProfilesReadResponse>;
    /**
     * commLogsCreate - Create communication (phone call) logs
    **/
    commLogsCreate(req: operations.CommLogsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CommLogsCreateResponse>;
    /**
     * commLogsList - Retrieve or search communicatioin (phone call) logs
    **/
    commLogsList(req: operations.CommLogsListRequest, config?: AxiosRequestConfig): Promise<operations.CommLogsListResponse>;
    /**
     * commLogsPartialUpdate - Update an existing communication (phone call) logs
    **/
    commLogsPartialUpdate(req: operations.CommLogsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CommLogsPartialUpdateResponse>;
    /**
     * commLogsRead - Retrieve an existing communication (phone call) logs
    **/
    commLogsRead(req: operations.CommLogsReadRequest, config?: AxiosRequestConfig): Promise<operations.CommLogsReadResponse>;
    /**
     * commLogsUpdate - Update an existing communication (phone call) logs
    **/
    commLogsUpdate(req: operations.CommLogsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CommLogsUpdateResponse>;
    /**
     * customInsurancePlanNamesList - Retrieve or search custom insurance plan names
    **/
    customInsurancePlanNamesList(req: operations.CustomInsurancePlanNamesListRequest, config?: AxiosRequestConfig): Promise<operations.CustomInsurancePlanNamesListResponse>;
    /**
     * customInsurancePlanNamesRead - Retrieve an existing custom insurance plan name
    **/
    customInsurancePlanNamesRead(req: operations.CustomInsurancePlanNamesReadRequest, config?: AxiosRequestConfig): Promise<operations.CustomInsurancePlanNamesReadResponse>;
    /**
     * eligibilityChecksList - Retrieve or search past eligibility checks for patient
    **/
    eligibilityChecksList(req: operations.EligibilityChecksListRequest, config?: AxiosRequestConfig): Promise<operations.EligibilityChecksListResponse>;
    /**
     * eligibilityChecksRead - Retrieve an existing past eligibility check
    **/
    eligibilityChecksRead(req: operations.EligibilityChecksReadRequest, config?: AxiosRequestConfig): Promise<operations.EligibilityChecksReadResponse>;
    /**
     * lineItemsCreate - Create billing line item for appointments
    **/
    lineItemsCreate(req: operations.LineItemsCreateRequest, config?: AxiosRequestConfig): Promise<operations.LineItemsCreateResponse>;
    lineItemsDelete(req: operations.LineItemsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.LineItemsDeleteResponse>;
    /**
     * lineItemsList - Retrieve or search billing line items
    **/
    lineItemsList(req: operations.LineItemsListRequest, config?: AxiosRequestConfig): Promise<operations.LineItemsListResponse>;
    lineItemsPartialUpdate(req: operations.LineItemsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LineItemsPartialUpdateResponse>;
    /**
     * lineItemsRead - Retrieve an existing billing line item
    **/
    lineItemsRead(req: operations.LineItemsReadRequest, config?: AxiosRequestConfig): Promise<operations.LineItemsReadResponse>;
    lineItemsUpdate(req: operations.LineItemsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LineItemsUpdateResponse>;
    /**
     * patientPaymentLogList - Retrieve or search patient payment logs
    **/
    patientPaymentLogList(req: operations.PatientPaymentLogListRequest, config?: AxiosRequestConfig): Promise<operations.PatientPaymentLogListResponse>;
    /**
     * patientPaymentLogRead - Retrieve an existing patient payment log
    **/
    patientPaymentLogRead(req: operations.PatientPaymentLogReadRequest, config?: AxiosRequestConfig): Promise<operations.PatientPaymentLogReadResponse>;
    /**
     * patientPaymentsCreate - Create patient payment
    **/
    patientPaymentsCreate(req: operations.PatientPaymentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PatientPaymentsCreateResponse>;
    /**
     * patientPaymentsList - Retrieve or search patient payments
    **/
    patientPaymentsList(req: operations.PatientPaymentsListRequest, config?: AxiosRequestConfig): Promise<operations.PatientPaymentsListResponse>;
    /**
     * patientPaymentsRead - Retrieve an existing patient payment
    **/
    patientPaymentsRead(req: operations.PatientPaymentsReadRequest, config?: AxiosRequestConfig): Promise<operations.PatientPaymentsReadResponse>;
    proceduresList(req: operations.ProceduresListRequest, config?: AxiosRequestConfig): Promise<operations.ProceduresListResponse>;
    proceduresRead(req: operations.ProceduresReadRequest, config?: AxiosRequestConfig): Promise<operations.ProceduresReadResponse>;
    /**
     * transactionsList - Retrieve or search insurance transactions associated with billing line items
    **/
    transactionsList(req: operations.TransactionsListRequest, config?: AxiosRequestConfig): Promise<operations.TransactionsListResponse>;
    /**
     * transactionsRead - Retrieve an existing insurance transaction
    **/
    transactionsRead(req: operations.TransactionsReadRequest, config?: AxiosRequestConfig): Promise<operations.TransactionsReadResponse>;
}
