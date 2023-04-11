import { SpeakeasyBase } from "../../../internal/utils";
import { StrategyEnum } from "./strategyenum";
import { TargetDestinationEnum } from "./targetdestinationenum";
import { TransformationTool } from "./transformationtool";
/**
 *  Contains a recommendation set.
 */
export declare class RecommendationSet extends SpeakeasyBase {
    strategy?: StrategyEnum;
    targetDestination?: TargetDestinationEnum;
    transformationTool?: TransformationTool;
}
