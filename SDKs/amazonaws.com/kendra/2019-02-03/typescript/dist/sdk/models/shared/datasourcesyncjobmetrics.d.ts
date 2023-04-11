import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a data source connector.
 */
export declare class DataSourceSyncJobMetrics extends SpeakeasyBase {
    documentsAdded?: string;
    documentsDeleted?: string;
    documentsFailed?: string;
    documentsModified?: string;
    documentsScanned?: string;
}
