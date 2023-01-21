package shared

type DataSourceSyncJobStatusEnum string

const (
	DataSourceSyncJobStatusEnumFailed          DataSourceSyncJobStatusEnum = "FAILED"
	DataSourceSyncJobStatusEnumSucceeded       DataSourceSyncJobStatusEnum = "SUCCEEDED"
	DataSourceSyncJobStatusEnumSyncing         DataSourceSyncJobStatusEnum = "SYNCING"
	DataSourceSyncJobStatusEnumIncomplete      DataSourceSyncJobStatusEnum = "INCOMPLETE"
	DataSourceSyncJobStatusEnumStopping        DataSourceSyncJobStatusEnum = "STOPPING"
	DataSourceSyncJobStatusEnumAborted         DataSourceSyncJobStatusEnum = "ABORTED"
	DataSourceSyncJobStatusEnumSyncingIndexing DataSourceSyncJobStatusEnum = "SYNCING_INDEXING"
)
