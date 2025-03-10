// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type DataFormatEnum string

const (
	DataFormatEnumAvro     DataFormatEnum = "AVRO"
	DataFormatEnumJSON     DataFormatEnum = "JSON"
	DataFormatEnumProtobuf DataFormatEnum = "PROTOBUF"
)

func (e DataFormatEnum) ToPointer() *DataFormatEnum {
	return &e
}

func (e *DataFormatEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AVRO":
		fallthrough
	case "JSON":
		fallthrough
	case "PROTOBUF":
		*e = DataFormatEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DataFormatEnum: %v", v)
	}
}
