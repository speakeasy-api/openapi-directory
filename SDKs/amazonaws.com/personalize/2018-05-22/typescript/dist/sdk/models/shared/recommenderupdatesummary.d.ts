import { SpeakeasyBase } from "../../../internal/utils";
import { RecommenderConfig } from "./recommenderconfig";
/**
 * Provides a summary of the properties of a recommender update. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a> API.
 */
export declare class RecommenderUpdateSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    failureReason?: string;
    lastUpdatedDateTime?: Date;
    recommenderConfig?: RecommenderConfig;
    status?: string;
}
