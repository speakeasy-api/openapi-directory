import { SpeakeasyBase } from "../../../internal/utils";
import { LongTermPricingListEntry } from "./longtermpricinglistentry";
/**
 * Success
 */
export declare class ListLongTermPricingResult extends SpeakeasyBase {
    longTermPricingEntries?: LongTermPricingListEntry[];
    nextToken?: string;
}
