package shared

type LabOrderIcd10Code struct {
	Code        *string `json:"code,omitempty"`
	Description *string `json:"description,omitempty"`
}

type LabOrderPriorityEnum string

const (
	LabOrderPriorityEnumN LabOrderPriorityEnum = "N"
	LabOrderPriorityEnumS LabOrderPriorityEnum = "S"
)

type LabOrder struct {
	AccessionNumber *string               `json:"accession_number,omitempty"`
	Doctor          int64                 `json:"doctor"`
	Documents       []string              `json:"documents,omitempty"`
	Icd10Codes      []LabOrderIcd10Code   `json:"icd10_codes,omitempty"`
	ID              *int64                `json:"id,omitempty"`
	Notes           *string               `json:"notes,omitempty"`
	Patient         int64                 `json:"patient"`
	Priority        *LabOrderPriorityEnum `json:"priority,omitempty"`
	RequisitionID   *string               `json:"requisition_id,omitempty"`
	Status          *string               `json:"status,omitempty"`
	Sublab          int64                 `json:"sublab"`
	Timestamp       *string               `json:"timestamp,omitempty"`
}
