package shared

type PatientLabResultSetAbnormalFlagEnum string

const (
	PatientLabResultSetAbnormalFlagEnumUnknown     PatientLabResultSetAbnormalFlagEnum = ""
	PatientLabResultSetAbnormalFlagEnumL           PatientLabResultSetAbnormalFlagEnum = "L"
	PatientLabResultSetAbnormalFlagEnumH           PatientLabResultSetAbnormalFlagEnum = "H"
	PatientLabResultSetAbnormalFlagEnumLl          PatientLabResultSetAbnormalFlagEnum = "LL"
	PatientLabResultSetAbnormalFlagEnumHh          PatientLabResultSetAbnormalFlagEnum = "HH"
	PatientLabResultSetAbnormalFlagEnumLessThan    PatientLabResultSetAbnormalFlagEnum = "<"
	PatientLabResultSetAbnormalFlagEnumGreaterThan PatientLabResultSetAbnormalFlagEnum = ">"
	PatientLabResultSetAbnormalFlagEnumN           PatientLabResultSetAbnormalFlagEnum = "N"
	PatientLabResultSetAbnormalFlagEnumA           PatientLabResultSetAbnormalFlagEnum = "A"
	PatientLabResultSetAbnormalFlagEnumAa          PatientLabResultSetAbnormalFlagEnum = "AA"
	PatientLabResultSetAbnormalFlagEnumNull        PatientLabResultSetAbnormalFlagEnum = "null"
	PatientLabResultSetAbnormalFlagEnumU           PatientLabResultSetAbnormalFlagEnum = "U"
	PatientLabResultSetAbnormalFlagEnumD           PatientLabResultSetAbnormalFlagEnum = "D"
	PatientLabResultSetAbnormalFlagEnumB           PatientLabResultSetAbnormalFlagEnum = "B"
	PatientLabResultSetAbnormalFlagEnumW           PatientLabResultSetAbnormalFlagEnum = "W"
	PatientLabResultSetAbnormalFlagEnumS           PatientLabResultSetAbnormalFlagEnum = "S"
	PatientLabResultSetAbnormalFlagEnumR           PatientLabResultSetAbnormalFlagEnum = "R"
	PatientLabResultSetAbnormalFlagEnumI           PatientLabResultSetAbnormalFlagEnum = "I"
	PatientLabResultSetAbnormalFlagEnumMs          PatientLabResultSetAbnormalFlagEnum = "MS"
	PatientLabResultSetAbnormalFlagEnumVs          PatientLabResultSetAbnormalFlagEnum = "VS"
)

type PatientLabResultSetStatusEnum string

const (
	PatientLabResultSetStatusEnumUnknown                    PatientLabResultSetStatusEnum = ""
	PatientLabResultSetStatusEnumOrderEntered               PatientLabResultSetStatusEnum = "Order Entered"
	PatientLabResultSetStatusEnumDiscontinued               PatientLabResultSetStatusEnum = "Discontinued"
	PatientLabResultSetStatusEnumInProgress                 PatientLabResultSetStatusEnum = "In Progress"
	PatientLabResultSetStatusEnumResultsReceived            PatientLabResultSetStatusEnum = "Results Received"
	PatientLabResultSetStatusEnumResultsReviewedWithPatient PatientLabResultSetStatusEnum = "Results Reviewed with Patient"
	PatientLabResultSetStatusEnumPaperOrder                 PatientLabResultSetStatusEnum = "Paper Order"
)

type PatientLabResultSet struct {
	CreatedAt             *string                              `json:"created_at,omitempty"`
	DateTestPerformed     *string                              `json:"date_test_performed,omitempty"`
	DoctorComments        *string                              `json:"doctor_comments,omitempty"`
	DoctorSignoff         *bool                                `json:"doctor_signoff,omitempty"`
	ID                    *int64                               `json:"id,omitempty"`
	LabAbnormalFlag       *PatientLabResultSetAbnormalFlagEnum `json:"lab_abnormal_flag,omitempty"`
	LabImportedFromCcr    *string                              `json:"lab_imported_from_ccr,omitempty"`
	LabNormalRange        *string                              `json:"lab_normal_range,omitempty"`
	LabNormalRangeUnits   *string                              `json:"lab_normal_range_units,omitempty"`
	LabOrderStatus        *PatientLabResultSetStatusEnum       `json:"lab_order_status,omitempty"`
	LabResultValue        *string                              `json:"lab_result_value,omitempty"`
	LabResultValueAsFloat *float64                             `json:"lab_result_value_as_float,omitempty"`
	LabResultValueUnits   *string                              `json:"lab_result_value_units,omitempty"`
	LoincCode             *string                              `json:"loinc_code,omitempty"`
	OrderingDoctor        int64                                `json:"ordering_doctor"`
	Patient               int64                                `json:"patient"`
	ScannedInResult       *string                              `json:"scanned_in_result,omitempty"`
	Title                 *string                              `json:"title,omitempty"`
	UpdatedAt             *string                              `json:"updated_at,omitempty"`
}
