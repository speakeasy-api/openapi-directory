package shared

// ControlMappingSource1
//
//	The data source that determines from where Audit Manager collects evidence for the control.
type ControlMappingSource1 struct {
	SourceDescription   *string                `json:"sourceDescription,omitempty"`
	SourceFrequency     map[string]interface{} `json:"sourceFrequency,omitempty"`
	SourceID            *string                `json:"sourceId,omitempty"`
	SourceKeyword       *SourceKeyword         `json:"sourceKeyword,omitempty"`
	SourceName          *string                `json:"sourceName,omitempty"`
	SourceSetUpOption   *SourceSetUpOptionEnum `json:"sourceSetUpOption,omitempty"`
	SourceType          *SourceTypeEnum        `json:"sourceType,omitempty"`
	TroubleshootingText *string                `json:"troubleshootingText,omitempty"`
}
