import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringDetail } from "./recurringdetail";
/**
 * OK - the request has succeeded.
 */
export declare class RecurringDetailsResult extends SpeakeasyBase {
    /**
     * The date when the recurring details were created.
     */
    creationDate?: Date;
    /**
     * A list of one or more recurring payment details.
     */
    details?: RecurringDetail[];
    /**
     * The most recent email for this shopper (if available).
     */
    lastKnownShopperEmail?: string;
    /**
     * The reference you use to uniquely identify the shopper (e.g. user ID or account ID).
     */
    shopperReference?: string;
}
