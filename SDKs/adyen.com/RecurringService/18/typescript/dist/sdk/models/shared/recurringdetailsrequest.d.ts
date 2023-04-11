import { SpeakeasyBase } from "../../../internal/utils";
import { Recurring } from "./recurring";
export declare class RecurringDetailsRequest extends SpeakeasyBase {
    /**
     * The merchant account identifier you want to process the (transaction) request with.
     */
    merchantAccount: string;
    recurring?: Recurring;
    /**
     * The reference you use to uniquely identify the shopper (e.g. user ID or account ID).
     */
    shopperReference: string;
}
