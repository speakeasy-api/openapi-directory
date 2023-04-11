import { SpeakeasyBase } from "../../../internal/utils";
import { QueryStagePlanNode } from "./querystageplannode";
/**
 * Stage statistics such as input and output rows and bytes, execution time and stage state. This information also includes substages and the query stage plan.
 */
export declare class QueryStage extends SpeakeasyBase {
    executionTime?: number;
    inputBytes?: number;
    inputRows?: number;
    outputBytes?: number;
    outputRows?: number;
    queryStagePlan?: QueryStagePlanNode;
    stageId?: number;
    state?: string;
    subStages?: QueryStage[];
}
