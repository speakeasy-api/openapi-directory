import { SpeakeasyBase } from "../../../internal/utils";
import { Failure } from "./failure";
import { Task } from "./task";
/**
 * Success
 */
export declare class DescribeTasksResponse extends SpeakeasyBase {
    failures?: Failure[];
    tasks?: Task[];
}
