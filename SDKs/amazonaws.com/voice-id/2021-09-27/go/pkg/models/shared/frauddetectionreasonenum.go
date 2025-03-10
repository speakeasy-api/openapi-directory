// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type FraudDetectionReasonEnum string

const (
	FraudDetectionReasonEnumKnownFraudster FraudDetectionReasonEnum = "KNOWN_FRAUDSTER"
	FraudDetectionReasonEnumVoiceSpoofing  FraudDetectionReasonEnum = "VOICE_SPOOFING"
)

func (e FraudDetectionReasonEnum) ToPointer() *FraudDetectionReasonEnum {
	return &e
}

func (e *FraudDetectionReasonEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "KNOWN_FRAUDSTER":
		fallthrough
	case "VOICE_SPOOFING":
		*e = FraudDetectionReasonEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for FraudDetectionReasonEnum: %v", v)
	}
}
