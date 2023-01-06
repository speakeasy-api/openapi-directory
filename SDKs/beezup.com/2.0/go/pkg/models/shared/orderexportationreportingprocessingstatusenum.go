package shared

type OrderExportationReportingProcessingStatusEnum string

const (
	OrderExportationReportingProcessingStatusEnumNone              OrderExportationReportingProcessingStatusEnum = "None"
	OrderExportationReportingProcessingStatusEnumInProgress        OrderExportationReportingProcessingStatusEnum = "InProgress"
	OrderExportationReportingProcessingStatusEnumDone              OrderExportationReportingProcessingStatusEnum = "Done"
	OrderExportationReportingProcessingStatusEnumFailed            OrderExportationReportingProcessingStatusEnum = "Failed"
	OrderExportationReportingProcessingStatusEnumAlreadyInProgress OrderExportationReportingProcessingStatusEnum = "AlreadyInProgress"
	OrderExportationReportingProcessingStatusEnumAborted           OrderExportationReportingProcessingStatusEnum = "Aborted"
	OrderExportationReportingProcessingStatusEnumSuspended         OrderExportationReportingProcessingStatusEnum = "Suspended"
)
