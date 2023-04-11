import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDirectDebitsForMandateUuidRequest extends SpeakeasyBase {
    /**
     * The mandate UUID to retrieve
     */
    mandateUuid: string;
}
/**
 * The three letter code for the currency - either `EUR` or `GBP`.
 */
export declare enum GetDirectDebitsForMandateUuidDirectDebitsDirectDebitCurrencyCodeEnum {
    Eur = "EUR",
    Gbp = "GBP"
}
/**
 * The currency.
 */
export declare class GetDirectDebitsForMandateUuidDirectDebitsDirectDebitCurrency extends SpeakeasyBase {
    /**
     * The three letter code for the currency - either `EUR` or `GBP`.
     */
    code?: GetDirectDebitsForMandateUuidDirectDebitsDirectDebitCurrencyCodeEnum;
    /**
     * The name of the currency
     */
    description?: string;
}
/**
 * The reject code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason.
 */
export declare enum GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    A = "A",
    B = "B"
}
/**
 * The statuses of the direct debit payments associated with the mandate.
 *
 * @remarks
 * * 'RECIEVED' - Direct Debit has been recieved
 * * 'REJECT_REQUESTED' - The direct debit has a rejected request associated with it
 * * 'REJECT_READY_FOR_PROCESSING'
 * * 'REJECT_RECORD_IN_PROGRESS'
 * * 'REJECT_RECORDED'
 * * 'REJECT_FILE_CREATED'
 * * 'REJECT_FILE_SENT'
 * * 'COLLECTED' - Direct debit collected
 * * 'REFUND_REQUESTED' - Refund requested on direct debit
 * * 'REFUND_RECORD_IN_PROGRESS' - Refund in progress on direct debit
 * * 'REFUND_RECORDED'
 * * 'REFUND_FILE_CREATED'
 * * 'REFUND_FILE_SENT'
 *
 */
export declare enum GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum {
    Recieved = "RECIEVED",
    RejectRequested = "REJECT_REQUESTED",
    RejectReadyForProcessing = "REJECT_READY_FOR_PROCESSING",
    RejectRecordInProgress = "REJECT_RECORD_IN_PROGRESS",
    RejectRecorded = "REJECT_RECORDED",
    RejectFileCreated = "REJECT_FILE_CREATED",
    RejectFileSent = "REJECT_FILE_SENT",
    Collected = "COLLECTED",
    RefundRequested = "REFUND_REQUESTED",
    RefundRecordInProgress = "REFUND_RECORD_IN_PROGRESS",
    RefundRecorded = "REFUND_RECORDED",
    RefundFileCreated = "REFUND_FILE_CREATED",
    RefundFileSent = "REFUND_FILE_SENT"
}
/**
 * The type of the direct debit.
 */
export declare enum GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum {
    FirstCollection = "FIRST_COLLECTION",
    OngoingCollection = "ONGOING_COLLECTION",
    RepresentedCollection = "REPRESENTED_COLLECTION",
    FinalCollection = "FINAL_COLLECTION"
}
export declare class GetDirectDebitsForMandateUuidDirectDebitsDirectDebit extends SpeakeasyBase {
    /**
     * Value of the payment
     */
    amount?: number;
    /**
     * The currency.
     */
    currency?: GetDirectDebitsForMandateUuidDirectDebitsDirectDebitCurrency;
    /**
     * Date the direct debit was created. Milliseconds since the epoch (1970).
     */
    dateCreated?: Date;
    /**
     * The direct debit reference.
     */
    directDebitReference?: string;
    /**
     * The UUID for the direct debit payment
     */
    directDebitUuid?: string;
    /**
     * DDIC is a Direct Debit Indemnity Claim (i.e.a refund). If if the DD is requested to be refunded it is marked isDDIC true.
     */
    isDDIC?: boolean;
    /**
     * Date the direct debit was last updated. Milliseconds since the epoch (1970).
     */
    lastUpdated?: Date;
    /**
     * The UUID for the mandate
     */
    mandateUUid?: string;
    /**
     * The Alias of the party who sets up the direct debit.
     */
    originatorAlias?: string;
    /**
     * The creator of the party who sets up the direct debit.
     */
    originatorName?: string;
    /**
     * Set by party who sets up the direct debit.
     */
    originatorReference?: string;
    /**
     * Reason why rejected
     */
    schemeRejectReason?: string;
    /**
     * The reject code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason.
     */
    schemeRejectReasonCode?: GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum;
    /**
     * The statuses of the direct debit payments associated with the mandate.
     *
     * @remarks
     * * 'RECIEVED' - Direct Debit has been recieved
     * * 'REJECT_REQUESTED' - The direct debit has a rejected request associated with it
     * * 'REJECT_READY_FOR_PROCESSING'
     * * 'REJECT_RECORD_IN_PROGRESS'
     * * 'REJECT_RECORDED'
     * * 'REJECT_FILE_CREATED'
     * * 'REJECT_FILE_SENT'
     * * 'COLLECTED' - Direct debit collected
     * * 'REFUND_REQUESTED' - Refund requested on direct debit
     * * 'REFUND_RECORD_IN_PROGRESS' - Refund in progress on direct debit
     * * 'REFUND_RECORDED'
     * * 'REFUND_FILE_CREATED'
     * * 'REFUND_FILE_SENT'
     *
     */
    status?: GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum;
    /**
     * The ican of your fire account that the money was taken from
     */
    targetIcan?: number;
    /**
     * The payee that was created when the DD was processed
     */
    targetPayeeId?: number;
    /**
     * The type of the direct debit.
     */
    type?: GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum;
}
/**
 * Retrieve all direct debit payments associated with a direct debit mandate.
 */
export declare class GetDirectDebitsForMandateUuidDirectDebits extends SpeakeasyBase {
    directdebits?: GetDirectDebitsForMandateUuidDirectDebitsDirectDebit[];
    /**
     * Number of direct debits found
     */
    total?: number;
}
export declare class GetDirectDebitsForMandateUuidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Retrieve all direct debit payments associated with a direct debit mandate.
     */
    directDebits?: GetDirectDebitsForMandateUuidDirectDebits;
}
