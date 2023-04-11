import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceSyncJobMetrics } from "./datasourcesyncjobmetrics";
import { DataSourceSyncJobStatusEnum } from "./datasourcesyncjobstatusenum";
import { ErrorCodeEnum } from "./errorcodeenum";
/**
 * Provides information about a data source synchronization job.
 */
export declare class DataSourceSyncJob extends SpeakeasyBase {
    dataSourceErrorCode?: string;
    endTime?: Date;
    errorCode?: ErrorCodeEnum;
    errorMessage?: string;
    executionId?: string;
    metrics?: DataSourceSyncJobMetrics;
    startTime?: Date;
    status?: DataSourceSyncJobStatusEnum;
}
