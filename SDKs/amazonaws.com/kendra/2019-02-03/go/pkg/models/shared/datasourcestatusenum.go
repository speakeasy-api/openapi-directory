package shared

type DataSourceStatusEnum string

const (
	DataSourceStatusEnumCreating DataSourceStatusEnum = "CREATING"
	DataSourceStatusEnumDeleting DataSourceStatusEnum = "DELETING"
	DataSourceStatusEnumFailed   DataSourceStatusEnum = "FAILED"
	DataSourceStatusEnumUpdating DataSourceStatusEnum = "UPDATING"
	DataSourceStatusEnumActive   DataSourceStatusEnum = "ACTIVE"
)
