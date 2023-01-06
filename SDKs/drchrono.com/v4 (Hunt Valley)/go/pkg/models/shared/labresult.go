package shared

type LabResultAbnormalStatusEnum string

const (
	LabResultAbnormalStatusEnumL           LabResultAbnormalStatusEnum = "L"
	LabResultAbnormalStatusEnumLl          LabResultAbnormalStatusEnum = "LL"
	LabResultAbnormalStatusEnumH           LabResultAbnormalStatusEnum = "H"
	LabResultAbnormalStatusEnumHh          LabResultAbnormalStatusEnum = "HH"
	LabResultAbnormalStatusEnumLessThan    LabResultAbnormalStatusEnum = "<"
	LabResultAbnormalStatusEnumGreaterThan LabResultAbnormalStatusEnum = ">"
	LabResultAbnormalStatusEnumA           LabResultAbnormalStatusEnum = "A"
	LabResultAbnormalStatusEnumAa          LabResultAbnormalStatusEnum = "AA"
	LabResultAbnormalStatusEnumS           LabResultAbnormalStatusEnum = "S"
	LabResultAbnormalStatusEnumR           LabResultAbnormalStatusEnum = "R"
	LabResultAbnormalStatusEnumI           LabResultAbnormalStatusEnum = "I"
	LabResultAbnormalStatusEnumNeg         LabResultAbnormalStatusEnum = "NEG"
	LabResultAbnormalStatusEnumPos         LabResultAbnormalStatusEnum = "POS"
	LabResultAbnormalStatusEnumN           LabResultAbnormalStatusEnum = "N"
	LabResultAbnormalStatusEnumUnknown     LabResultAbnormalStatusEnum = ""
)

type LabResultStatusEnum string

const (
	LabResultStatusEnumP LabResultStatusEnum = "P"
	LabResultStatusEnumI LabResultStatusEnum = "I"
	LabResultStatusEnumC LabResultStatusEnum = "C"
	LabResultStatusEnumF LabResultStatusEnum = "F"
	LabResultStatusEnumX LabResultStatusEnum = "X"
)

type LabResult struct {
	AbnormalStatus         *LabResultAbnormalStatusEnum `json:"abnormal_status,omitempty"`
	Comments               *string                      `json:"comments,omitempty"`
	Document               int64                        `json:"document"`
	GroupCode              *string                      `json:"group_code,omitempty"`
	ID                     *int64                       `json:"id,omitempty"`
	IsAbnormal             *string                      `json:"is_abnormal,omitempty"`
	LabOrder               *string                      `json:"lab_order,omitempty"`
	LabTest                int64                        `json:"lab_test"`
	NormalRange            *string                      `json:"normal_range,omitempty"`
	ObservationCode        *string                      `json:"observation_code,omitempty"`
	ObservationDescription *string                      `json:"observation_description,omitempty"`
	SpecimenReceived       *string                      `json:"specimen_received,omitempty"`
	Status                 LabResultStatusEnum          `json:"status"`
	TestPerformed          string                       `json:"test_performed"`
	Unit                   *string                      `json:"unit,omitempty"`
	Value                  string                       `json:"value"`
	ValueIsNumeric         *bool                        `json:"value_is_numeric,omitempty"`
}
