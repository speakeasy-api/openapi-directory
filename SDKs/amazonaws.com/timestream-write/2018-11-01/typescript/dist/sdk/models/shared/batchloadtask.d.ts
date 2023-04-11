import { SpeakeasyBase } from "../../../internal/utils";
import { BatchLoadStatusEnum } from "./batchloadstatusenum";
/**
 * Details about a batch load task.
 */
export declare class BatchLoadTask extends SpeakeasyBase {
    creationTime?: Date;
    databaseName?: string;
    lastUpdatedTime?: Date;
    resumableUntil?: Date;
    tableName?: string;
    taskId?: string;
    taskStatus?: BatchLoadStatusEnum;
}
