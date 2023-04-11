import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The three letter code for the currency - either `EUR` or `GBP`.
 */
export declare enum GetDirectDebitMandatesMandatesMandateCurrencyCodeEnum {
    Eur = "EUR",
    Gbp = "GBP"
}
/**
 * The currency.
 */
export declare class GetDirectDebitMandatesMandatesMandateCurrency extends SpeakeasyBase {
    /**
     * The three letter code for the currency - either `EUR` or `GBP`.
     */
    code?: GetDirectDebitMandatesMandatesMandateCurrencyCodeEnum;
    /**
     * The name of the currency
     */
    description?: string;
}
/**
 * Rejection reason if transaction is rejected
 */
export declare enum GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum {
    AccountDoesNotAcceptDirectDebits = "ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS",
    Ddic = "DDIC",
    AccountNotFound = "ACCOUNT_NOT_FOUND",
    AccountNotLive = "ACCOUNT_NOT_LIVE",
    CustomerNotFound = "CUSTOMER_NOT_FOUND",
    BusinessNotLive = "BUSINESS_NOT_LIVE",
    BusinessNotFull = "BUSINESS_NOT_FULL",
    PersonalUserNotLive = "PERSONAL_USER_NOT_LIVE",
    PersonalUserNotFull = "PERSONAL_USER_NOT_FULL",
    MandateAlreadyExists = "MANDATE_ALREADY_EXISTS",
    MandateWithDiferentAccount = "MANDATE_WITH_DIFERENT_ACCOUNT",
    NullMandateReference = "NULL_MANDATE_REFERENCE",
    InvalidAccountCurrency = "INVALID_ACCOUNT_CURRENCY",
    InvalidMandateReference = "INVALID_MANDATE_REFERENCE",
    RequestedByCustomerViaSupport = "REQUESTED_BY_CUSTOMER_VIA_SUPPORT",
    CustomerAccountClosed = "CUSTOMER_ACCOUNT_CLOSED",
    CustomerDeceased = "CUSTOMER_DECEASED",
    AccountTransferred = "ACCOUNT_TRANSFERRED",
    MandateNotFound = "MANDATE_NOT_FOUND",
    AccountTransferredToDifferentAccount = "ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT",
    InvalidAccountType = "INVALID_ACCOUNT_TYPE",
    MandateExpired = "MANDATE_EXPIRED",
    MandateCancelled = "MANDATE_CANCELLED",
    RequestedByCustomer = "REQUESTED_BY_CUSTOMER"
}
/**
 * The status of the mandate.
 *
 * @remarks
 * * 'CREATED'
 * * 'LIVE'
 * * 'REJECT_REQUESTED'
 * * 'REJECT_RECORD_IN_PROGRESS'
 * * 'REJECT_RECORDED'
 * * 'REJECT_FILE_CREATED'
 * * 'REJECT_FILE_SENT'
 * * 'CANCEL_REQUESTED'
 * * 'CANCEL_RECORD_IN_PROGRESS'
 * * 'CANCEL_RECORDED'
 * * 'CANCEL_FILE_CREATED'
 * * 'CANCEL_FILE_SENT'
 * * 'COMPLETE'
 * * 'DORMANT'
 *
 */
export declare enum GetDirectDebitMandatesMandatesMandateStatusEnum {
    Created = "CREATED",
    Live = "LIVE",
    RejectRequested = "REJECT_REQUESTED",
    RejectRecordInProgress = "REJECT_RECORD_IN_PROGRESS",
    RejectRecorded = "REJECT_RECORDED",
    RejectFileCreated = "REJECT_FILE_CREATED",
    RejectFileSent = "REJECT_FILE_SENT",
    CancelRequested = "CANCEL_REQUESTED",
    CancelRecordInProgress = "CANCEL_RECORD_IN_PROGRESS",
    CancelRecorded = "CANCEL_RECORDED",
    CancelFileCreated = "CANCEL_FILE_CREATED",
    CancelFileSent = "CANCEL_FILE_SENT",
    Complete = "COMPLETE",
    Dormant = "DORMANT"
}
export declare class GetDirectDebitMandatesMandatesMandate extends SpeakeasyBase {
    /**
     * The name of the alias
     */
    alias?: string;
    /**
     * The currency.
     */
    currency?: GetDirectDebitMandatesMandatesMandateCurrency;
    /**
     * Date the direct debit was canceled. Milliseconds since the epoch (1970).
     */
    dateCancelled?: Date;
    /**
     * Date the direct debit was completed. Milliseconds since the epoch (1970).
     */
    dateCompleted?: Date;
    /**
     * Date the direct debit was created. Milliseconds since the epoch (1970).
     */
    dateCreated?: Date;
    /**
     * Rejection reason if transaction is rejected
     */
    fireRejectionReason?: GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum;
    /**
     * Date the direct debit was last updated. Milliseconds since the epoch (1970).
     */
    lastUpdated?: Date;
    /**
     * The value of largest direct debit collected
     */
    latestDirectDebitAmount?: number;
    /**
     * The date of latest direct debit collected
     */
    latestDirectDebitDate?: Date;
    /**
     * the reference of the mandate
     */
    mandateReference?: string;
    /**
     * The UUID for the mandate
     */
    mandateUuid?: string;
    /**
     * The number of direct debits collected
     */
    numberOfDirectDebitCollected?: number;
    /**
     * The name of the alias
     */
    originatorAlias?: string;
    /**
     * Logo url from party who sets up the direct debit.
     */
    originatorLogoUrlLarge?: string;
    /**
     * Logo url from party who sets up the direct debit.
     */
    originatorLogoUrlSmall?: string;
    /**
     * The creator of the party who sets up the direct debit.
     */
    originatorName?: string;
    /**
     * Set by party who sets up the direct debit.
     */
    originatorReference?: string;
    /**
     * Reason for cancelation
     */
    schemeCancelReason?: string;
    /**
     * The cancelation code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason.
     */
    schemeCancelReasonCode?: string;
    /**
     * The status of the mandate.
     *
     * @remarks
     * * 'CREATED'
     * * 'LIVE'
     * * 'REJECT_REQUESTED'
     * * 'REJECT_RECORD_IN_PROGRESS'
     * * 'REJECT_RECORDED'
     * * 'REJECT_FILE_CREATED'
     * * 'REJECT_FILE_SENT'
     * * 'CANCEL_REQUESTED'
     * * 'CANCEL_RECORD_IN_PROGRESS'
     * * 'CANCEL_RECORDED'
     * * 'CANCEL_FILE_CREATED'
     * * 'CANCEL_FILE_SENT'
     * * 'COMPLETE'
     * * 'DORMANT'
     *
     */
    status?: GetDirectDebitMandatesMandatesMandateStatusEnum;
    /**
     * Identifier for the fire.com account (assigned by fire.com)
     */
    targetIcan?: number;
    /**
     * The value of direct debits collected
     */
    valueOfDirectDebitCollected?: number;
}
/**
 * List all direct debit mandates.
 */
export declare class GetDirectDebitMandatesMandates extends SpeakeasyBase {
    mandates?: GetDirectDebitMandatesMandatesMandate[];
    /**
     * Number of direct debits found
     */
    total?: number;
}
export declare class GetDirectDebitMandatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List all direct debit mandates.
     */
    mandates?: GetDirectDebitMandatesMandates;
}
