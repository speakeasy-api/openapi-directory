import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureGroupSummary } from "./featuregroupsummary";
/**
 * Success
 */
export declare class ListFeatureGroupsResponse extends SpeakeasyBase {
    featureGroupSummaries: FeatureGroupSummary[];
    nextToken: string;
}
