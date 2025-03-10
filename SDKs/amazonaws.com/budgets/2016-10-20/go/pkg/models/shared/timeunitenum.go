// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// TimeUnitEnum -  The time unit of the budget, such as MONTHLY or QUARTERLY.
type TimeUnitEnum string

const (
	TimeUnitEnumDaily     TimeUnitEnum = "DAILY"
	TimeUnitEnumMonthly   TimeUnitEnum = "MONTHLY"
	TimeUnitEnumQuarterly TimeUnitEnum = "QUARTERLY"
	TimeUnitEnumAnnually  TimeUnitEnum = "ANNUALLY"
)

func (e TimeUnitEnum) ToPointer() *TimeUnitEnum {
	return &e
}

func (e *TimeUnitEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DAILY":
		fallthrough
	case "MONTHLY":
		fallthrough
	case "QUARTERLY":
		fallthrough
	case "ANNUALLY":
		*e = TimeUnitEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for TimeUnitEnum: %v", v)
	}
}
