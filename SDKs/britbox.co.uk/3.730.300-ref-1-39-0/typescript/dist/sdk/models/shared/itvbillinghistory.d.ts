import { SpeakeasyBase } from "../../../internal/utils";
import { ItvBillingHistoryRecord } from "./itvbillinghistoryrecord";
/**
 * List of billing records.
 */
export declare class ItvBillingHistory extends SpeakeasyBase {
    /**
     * The array of objects with subscription payment details.
     */
    paymentHistory: ItvBillingHistoryRecord[];
}
