import { SpeakeasyBase } from "../../../internal/utils";
import { BatchLoadStatusEnum } from "./batchloadstatusenum";
export declare class ListBatchLoadTasksRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    taskStatus?: BatchLoadStatusEnum;
}
