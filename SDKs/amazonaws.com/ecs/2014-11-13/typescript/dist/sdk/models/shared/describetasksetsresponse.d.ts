import { SpeakeasyBase } from "../../../internal/utils";
import { Failure } from "./failure";
import { TaskSet } from "./taskset";
/**
 * Success
 */
export declare class DescribeTaskSetsResponse extends SpeakeasyBase {
    failures?: Failure[];
    taskSets?: TaskSet[];
}
