import { SpeakeasyBase } from "../../../internal/utils";
import { RecommenderConfig } from "./recommenderconfig";
/**
 * Provides a summary of the properties of the recommender.
 */
export declare class RecommenderSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    datasetGroupArn?: string;
    lastUpdatedDateTime?: Date;
    name?: string;
    recipeArn?: string;
    recommenderArn?: string;
    recommenderConfig?: RecommenderConfig;
    status?: string;
}
