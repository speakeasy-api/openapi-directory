package shared

type SseStatusEnum string

const (
	SSEStatusEnumEnabling  SseStatusEnum = "ENABLING"
	SSEStatusEnumEnabled   SseStatusEnum = "ENABLED"
	SSEStatusEnumDisabling SseStatusEnum = "DISABLING"
	SSEStatusEnumDisabled  SseStatusEnum = "DISABLED"
	SSEStatusEnumUpdating  SseStatusEnum = "UPDATING"
)
