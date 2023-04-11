import { SpeakeasyBase } from "../../../internal/utils";
import { RecommenderConfig } from "./recommenderconfig";
import { RecommenderUpdateSummary } from "./recommenderupdatesummary";
/**
 * Describes a recommendation generator for a Domain dataset group. You create a recommender in a Domain dataset group for a specific domain use case (domain recipe), and specify the recommender in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request.
 */
export declare class Recommender extends SpeakeasyBase {
    creationDateTime?: Date;
    datasetGroupArn?: string;
    failureReason?: string;
    lastUpdatedDateTime?: Date;
    latestRecommenderUpdate?: RecommenderUpdateSummary;
    modelMetrics?: Record<string, number>;
    name?: string;
    recipeArn?: string;
    recommenderArn?: string;
    recommenderConfig?: RecommenderConfig;
    status?: string;
}
