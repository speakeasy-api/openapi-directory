import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringDetail } from "./recurringdetail";
/**
 * OK - the request has succeeded.
 */
export declare class DisableResult extends SpeakeasyBase {
    /**
     * A list of one or more recurring payment details that were disabled.
     */
    details?: RecurringDetail[];
    /**
     * Depending on whether a specific recurring detail was in the request, result is either [detail-successfully-disabled] or [all-details-successfully-disabled].
     */
    response?: string;
}
