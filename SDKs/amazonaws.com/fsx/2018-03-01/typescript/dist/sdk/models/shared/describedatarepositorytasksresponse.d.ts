import { SpeakeasyBase } from "../../../internal/utils";
import { DataRepositoryTask } from "./datarepositorytask";
/**
 * Success
 */
export declare class DescribeDataRepositoryTasksResponse extends SpeakeasyBase {
    dataRepositoryTasks?: DataRepositoryTask[];
    /**
     * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
     */
    nextToken?: string;
}
