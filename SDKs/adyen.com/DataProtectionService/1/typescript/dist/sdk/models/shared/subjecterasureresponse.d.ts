import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result of this operation.
 */
export declare enum SubjectErasureResponseResultEnum {
    ActiveRecurringTokenExists = "ACTIVE_RECURRING_TOKEN_EXISTS",
    AlreadyProcessed = "ALREADY_PROCESSED",
    PaymentNotFound = "PAYMENT_NOT_FOUND",
    Success = "SUCCESS"
}
/**
 * OK - the request has succeeded.
 */
export declare class SubjectErasureResponse extends SpeakeasyBase {
    /**
     * The result of this operation.
     */
    result?: SubjectErasureResponseResultEnum;
}
