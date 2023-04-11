import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options to configure how your data quality evaluation results are published.
 */
export declare class DQResultsPublishingOptions extends SpeakeasyBase {
    cloudWatchMetricsEnabled?: boolean;
    evaluationContext?: string;
    resultsPublishingEnabled?: boolean;
    resultsS3Prefix?: string;
}
