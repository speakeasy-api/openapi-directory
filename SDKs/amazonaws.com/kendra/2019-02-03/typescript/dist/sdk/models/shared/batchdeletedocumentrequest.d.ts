import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceSyncJobMetricTarget } from "./datasourcesyncjobmetrictarget";
export declare class BatchDeleteDocumentRequest extends SpeakeasyBase {
    /**
     * Maps a particular data source sync job to a particular data source.
     */
    dataSourceSyncJobMetricTarget?: DataSourceSyncJobMetricTarget;
    documentIdList: string[];
    indexId: string;
}
