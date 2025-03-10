// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type EbsVolumeTypeEnum string

const (
	EbsVolumeTypeEnumStandard EbsVolumeTypeEnum = "standard"
	EbsVolumeTypeEnumIo1      EbsVolumeTypeEnum = "io1"
	EbsVolumeTypeEnumIo2      EbsVolumeTypeEnum = "io2"
	EbsVolumeTypeEnumGp2      EbsVolumeTypeEnum = "gp2"
	EbsVolumeTypeEnumGp3      EbsVolumeTypeEnum = "gp3"
	EbsVolumeTypeEnumSc1      EbsVolumeTypeEnum = "sc1"
	EbsVolumeTypeEnumSt1      EbsVolumeTypeEnum = "st1"
)

func (e EbsVolumeTypeEnum) ToPointer() *EbsVolumeTypeEnum {
	return &e
}

func (e *EbsVolumeTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "standard":
		fallthrough
	case "io1":
		fallthrough
	case "io2":
		fallthrough
	case "gp2":
		fallthrough
	case "gp3":
		fallthrough
	case "sc1":
		fallthrough
	case "st1":
		*e = EbsVolumeTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for EbsVolumeTypeEnum: %v", v)
	}
}
