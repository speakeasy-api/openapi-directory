import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceSyncJobStatusEnum } from "./datasourcesyncjobstatusenum";
import { TimeRange } from "./timerange";
export declare class ListDataSourceSyncJobsRequest extends SpeakeasyBase {
    id: string;
    indexId: string;
    maxResults?: number;
    nextToken?: string;
    startTimeFilter?: TimeRange;
    statusFilter?: DataSourceSyncJobStatusEnum;
}
