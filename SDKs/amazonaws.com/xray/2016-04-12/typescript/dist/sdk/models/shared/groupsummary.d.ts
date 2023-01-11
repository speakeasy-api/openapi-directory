import { SpeakeasyBase } from "../../../internal/utils";
import { InsightsConfiguration } from "./insightsconfiguration";
/**
 * Details for a group without metadata.
**/
export declare class GroupSummary extends SpeakeasyBase {
    filterExpression?: string;
    groupARN?: string;
    groupName?: string;
    insightsConfiguration?: InsightsConfiguration;
}
