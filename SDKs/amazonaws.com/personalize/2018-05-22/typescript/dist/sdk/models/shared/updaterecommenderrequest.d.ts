import { SpeakeasyBase } from "../../../internal/utils";
import { RecommenderConfig } from "./recommenderconfig";
export declare class UpdateRecommenderRequest extends SpeakeasyBase {
    recommenderArn: string;
    recommenderConfig: RecommenderConfig;
}
