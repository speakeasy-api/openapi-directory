package shared

type OtaUpdateStatusEnum string

const (
	OTAUpdateStatusEnumCreatePending    OtaUpdateStatusEnum = "CREATE_PENDING"
	OTAUpdateStatusEnumCreateInProgress OtaUpdateStatusEnum = "CREATE_IN_PROGRESS"
	OTAUpdateStatusEnumCreateComplete   OtaUpdateStatusEnum = "CREATE_COMPLETE"
	OTAUpdateStatusEnumCreateFailed     OtaUpdateStatusEnum = "CREATE_FAILED"
)
