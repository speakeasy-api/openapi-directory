import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureSummary } from "./featuresummary";
/**
 * Success
 */
export declare class ListFeaturesResponse extends SpeakeasyBase {
    features?: FeatureSummary[];
    nextToken?: string;
}
