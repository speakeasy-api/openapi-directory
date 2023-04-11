import { SpeakeasyBase } from "../../../internal/utils";
import { RecommenderConfig } from "./recommenderconfig";
import { Tag } from "./tag";
export declare class CreateRecommenderRequest extends SpeakeasyBase {
    datasetGroupArn: string;
    name: string;
    recipeArn: string;
    recommenderConfig?: RecommenderConfig;
    tags?: Tag[];
}
