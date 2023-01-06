package shared

// Resource1
// A resource related to a finding.
type Resource1 struct {
	DataClassification *DataClassificationDetails `json:"DataClassification,omitempty"`
	Details            *ResourceDetails1          `json:"Details,omitempty"`
	ID                 string                     `json:"Id"`
	Partition          *PartitionEnum             `json:"Partition,omitempty"`
	Region             *string                    `json:"Region,omitempty"`
	ResourceRole       *string                    `json:"ResourceRole,omitempty"`
	Tags               map[string]string          `json:"Tags,omitempty"`
	Type               string                     `json:"Type"`
}
