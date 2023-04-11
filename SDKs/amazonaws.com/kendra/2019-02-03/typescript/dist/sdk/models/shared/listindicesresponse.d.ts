import { SpeakeasyBase } from "../../../internal/utils";
import { IndexConfigurationSummary } from "./indexconfigurationsummary";
/**
 * Success
 */
export declare class ListIndicesResponse extends SpeakeasyBase {
    indexConfigurationSummaryItems?: IndexConfigurationSummary[];
    nextToken?: string;
}
