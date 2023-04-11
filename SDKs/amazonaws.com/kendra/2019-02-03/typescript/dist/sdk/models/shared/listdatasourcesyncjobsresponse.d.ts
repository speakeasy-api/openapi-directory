import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceSyncJob } from "./datasourcesyncjob";
/**
 * Success
 */
export declare class ListDataSourceSyncJobsResponse extends SpeakeasyBase {
    history?: DataSourceSyncJob[];
    nextToken?: string;
}
