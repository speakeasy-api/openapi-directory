package shared

// SegmentResponse1
// Provides information about the configuration, dimension, and other settings for a segment.
type SegmentResponse1 struct {
	ApplicationID    string                 `json:"ApplicationId"`
	Arn              string                 `json:"Arn"`
	CreationDate     string                 `json:"CreationDate"`
	Dimensions       *SegmentDimensions1    `json:"Dimensions,omitempty"`
	ID               string                 `json:"Id"`
	ImportDefinition *SegmentImportResource `json:"ImportDefinition,omitempty"`
	LastModifiedDate *string                `json:"LastModifiedDate,omitempty"`
	Name             *string                `json:"Name,omitempty"`
	SegmentGroups    *SegmentGroupList      `json:"SegmentGroups,omitempty"`
	SegmentType      SegmentTypeEnum        `json:"SegmentType"`
	Version          *int64                 `json:"Version,omitempty"`
	Tags             map[string]string      `json:"tags,omitempty"`
}
