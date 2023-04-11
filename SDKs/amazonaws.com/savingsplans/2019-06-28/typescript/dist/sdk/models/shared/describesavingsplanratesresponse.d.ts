import { SpeakeasyBase } from "../../../internal/utils";
import { SavingsPlanRate } from "./savingsplanrate";
/**
 * Success
 */
export declare class DescribeSavingsPlanRatesResponse extends SpeakeasyBase {
    nextToken?: string;
    savingsPlanId?: string;
    searchResults?: SavingsPlanRate[];
}
