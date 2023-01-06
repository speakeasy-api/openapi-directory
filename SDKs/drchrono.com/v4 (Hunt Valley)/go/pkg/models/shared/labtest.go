package shared

type LabTestStatusEnum string

const (
	LabTestStatusEnumP LabTestStatusEnum = "P"
	LabTestStatusEnumI LabTestStatusEnum = "I"
	LabTestStatusEnumC LabTestStatusEnum = "C"
	LabTestStatusEnumF LabTestStatusEnum = "F"
	LabTestStatusEnumX LabTestStatusEnum = "X"
)

type LabTest struct {
	Code                *string            `json:"code,omitempty"`
	CollectionDate      *string            `json:"collection_date,omitempty"`
	Description         *string            `json:"description,omitempty"`
	ID                  *int64             `json:"id,omitempty"`
	InternalNotes       *string            `json:"internal_notes,omitempty"`
	LabOrder            int64              `json:"lab_order"`
	Name                *string            `json:"name,omitempty"`
	ReportNotes         *string            `json:"report_notes,omitempty"`
	SpecimenCondition   *string            `json:"specimen_condition,omitempty"`
	SpecimenSource      *string            `json:"specimen_source,omitempty"`
	SpecimenTotalVolume *float64           `json:"specimen_total_volume,omitempty"`
	Status              *LabTestStatusEnum `json:"status,omitempty"`
}
