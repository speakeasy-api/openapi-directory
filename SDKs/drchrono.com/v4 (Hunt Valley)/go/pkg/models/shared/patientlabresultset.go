// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// PatientLabResultSetAbnormalFlagEnum - HL7 codified abnormal flag for the result.
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

func (e PatientLabResultSetAbnormalFlagEnum) ToPointer() *PatientLabResultSetAbnormalFlagEnum {
	return &e
}

func (e *PatientLabResultSetAbnormalFlagEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "":
		fallthrough
	case "L":
		fallthrough
	case "H":
		fallthrough
	case "LL":
		fallthrough
	case "HH":
		fallthrough
	case "<":
		fallthrough
	case ">":
		fallthrough
	case "N":
		fallthrough
	case "A":
		fallthrough
	case "AA":
		fallthrough
	case "null":
		fallthrough
	case "U":
		fallthrough
	case "D":
		fallthrough
	case "B":
		fallthrough
	case "W":
		fallthrough
	case "S":
		fallthrough
	case "R":
		fallthrough
	case "I":
		fallthrough
	case "MS":
		fallthrough
	case "VS":
		*e = PatientLabResultSetAbnormalFlagEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PatientLabResultSetAbnormalFlagEnum: %v", v)
	}
}

// PatientLabResultSetStatusEnum - Status of the lab order.
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

func (e PatientLabResultSetStatusEnum) ToPointer() *PatientLabResultSetStatusEnum {
	return &e
}

func (e *PatientLabResultSetStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "":
		fallthrough
	case "Order Entered":
		fallthrough
	case "Discontinued":
		fallthrough
	case "In Progress":
		fallthrough
	case "Results Received":
		fallthrough
	case "Results Reviewed with Patient":
		fallthrough
	case "Paper Order":
		*e = PatientLabResultSetStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PatientLabResultSetStatusEnum: %v", v)
	}
}

// PatientLabResultSet - Created
type PatientLabResultSet struct {
	CreatedAt *string `json:"created_at,omitempty"`
	// Date of lab test.
	DateTestPerformed *string `json:"date_test_performed,omitempty"`
	// Comment from the doctor on lab result.
	DoctorComments *string `json:"doctor_comments,omitempty"`
	// Check this box when the doctor has reviewed the lab result and taken appropriate action.
	DoctorSignoff *bool  `json:"doctor_signoff,omitempty"`
	ID            *int64 `json:"id,omitempty"`
	// HL7 codified abnormal flag for the result.
	LabAbnormalFlag *PatientLabResultSetAbnormalFlagEnum `json:"lab_abnormal_flag,omitempty"`
	// Imported CCR document that contains lab results.
	LabImportedFromCcr  *string `json:"lab_imported_from_ccr,omitempty"`
	LabNormalRange      *string `json:"lab_normal_range,omitempty"`
	LabNormalRangeUnits *string `json:"lab_normal_range_units,omitempty"`
	// Status of the lab order.
	LabOrderStatus        *PatientLabResultSetStatusEnum `json:"lab_order_status,omitempty"`
	LabResultValue        *string                        `json:"lab_result_value,omitempty"`
	LabResultValueAsFloat *float64                       `json:"lab_result_value_as_float,omitempty"`
	LabResultValueUnits   *string                        `json:"lab_result_value_units,omitempty"`
	LoincCode             *string                        `json:"loinc_code,omitempty"`
	OrderingDoctor        int64                          `json:"ordering_doctor"`
	Patient               int64                          `json:"patient"`
	// Scanned in PDF for this lab result (optional).
	ScannedInResult *string `json:"scanned_in_result,omitempty"`
	Title           *string `json:"title,omitempty"`
	UpdatedAt       *string `json:"updated_at,omitempty"`
}
