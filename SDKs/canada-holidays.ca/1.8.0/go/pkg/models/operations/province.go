// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// ProvinceOptionalEnum - A boolean parameter (AB and BC only). If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.
type ProvinceOptionalEnum string

const (
	ProvinceOptionalEnumOne   ProvinceOptionalEnum = "1"
	ProvinceOptionalEnumZero  ProvinceOptionalEnum = "0"
	ProvinceOptionalEnumTrue  ProvinceOptionalEnum = "true"
	ProvinceOptionalEnumFalse ProvinceOptionalEnum = "false"
)

func (e ProvinceOptionalEnum) ToPointer() *ProvinceOptionalEnum {
	return &e
}

func (e *ProvinceOptionalEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "1":
		fallthrough
	case "0":
		fallthrough
	case "true":
		fallthrough
	case "false":
		*e = ProvinceOptionalEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ProvinceOptionalEnum: %v", v)
	}
}

// ProvinceProvinceIDEnum - A Canadian province abbreviation
type ProvinceProvinceIDEnum string

const (
	ProvinceProvinceIDEnumAb ProvinceProvinceIDEnum = "AB"
	ProvinceProvinceIDEnumBc ProvinceProvinceIDEnum = "BC"
	ProvinceProvinceIDEnumMb ProvinceProvinceIDEnum = "MB"
	ProvinceProvinceIDEnumNb ProvinceProvinceIDEnum = "NB"
	ProvinceProvinceIDEnumNl ProvinceProvinceIDEnum = "NL"
	ProvinceProvinceIDEnumNs ProvinceProvinceIDEnum = "NS"
	ProvinceProvinceIDEnumNt ProvinceProvinceIDEnum = "NT"
	ProvinceProvinceIDEnumNu ProvinceProvinceIDEnum = "NU"
	ProvinceProvinceIDEnumOn ProvinceProvinceIDEnum = "ON"
	ProvinceProvinceIDEnumPe ProvinceProvinceIDEnum = "PE"
	ProvinceProvinceIDEnumQc ProvinceProvinceIDEnum = "QC"
	ProvinceProvinceIDEnumSk ProvinceProvinceIDEnum = "SK"
	ProvinceProvinceIDEnumYt ProvinceProvinceIDEnum = "YT"
)

func (e ProvinceProvinceIDEnum) ToPointer() *ProvinceProvinceIDEnum {
	return &e
}

func (e *ProvinceProvinceIDEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AB":
		fallthrough
	case "BC":
		fallthrough
	case "MB":
		fallthrough
	case "NB":
		fallthrough
	case "NL":
		fallthrough
	case "NS":
		fallthrough
	case "NT":
		fallthrough
	case "NU":
		fallthrough
	case "ON":
		fallthrough
	case "PE":
		fallthrough
	case "QC":
		fallthrough
	case "SK":
		fallthrough
	case "YT":
		*e = ProvinceProvinceIDEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ProvinceProvinceIDEnum: %v", v)
	}
}

type ProvinceRequest struct {
	// A boolean parameter (AB and BC only). If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.
	Optional *ProvinceOptionalEnum `queryParam:"style=form,explode=true,name=optional"`
	// A Canadian province abbreviation
	ProvinceID ProvinceProvinceIDEnum `pathParam:"style=simple,explode=false,name=provinceId"`
	// A calendar year
	Year *int64 `queryParam:"style=form,explode=true,name=year"`
}

// Province400ApplicationJSON - Bad Request
type Province400ApplicationJSON struct {
	Error *shared.Error `json:"error,omitempty"`
}

// Province200ApplicationJSON - OK
type Province200ApplicationJSON struct {
	// A Canadian province or territory
	Province *shared.Province `json:"province,omitempty"`
}

type ProvinceResponse struct {
	ContentType string
	// OK
	Province200ApplicationJSONObject *Province200ApplicationJSON
	// Bad Request
	Province400ApplicationJSONObject *Province400ApplicationJSON
	StatusCode                       int
	RawResponse                      *http.Response
}
