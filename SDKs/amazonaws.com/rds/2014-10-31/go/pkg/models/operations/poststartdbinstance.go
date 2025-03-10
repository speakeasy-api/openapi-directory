// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTStartDBInstanceActionEnum
type POSTStartDBInstanceActionEnum string

const (
	POSTStartDBInstanceActionEnumStartDbInstance POSTStartDBInstanceActionEnum = "StartDBInstance"
)

func (e POSTStartDBInstanceActionEnum) ToPointer() *POSTStartDBInstanceActionEnum {
	return &e
}

func (e *POSTStartDBInstanceActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "StartDBInstance":
		*e = POSTStartDBInstanceActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTStartDBInstanceActionEnum: %v", v)
	}
}

// POSTStartDBInstanceVersionEnum
type POSTStartDBInstanceVersionEnum string

const (
	POSTStartDBInstanceVersionEnumTwoThousandAndFourteen1031 POSTStartDBInstanceVersionEnum = "2014-10-31"
)

func (e POSTStartDBInstanceVersionEnum) ToPointer() *POSTStartDBInstanceVersionEnum {
	return &e
}

func (e *POSTStartDBInstanceVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2014-10-31":
		*e = POSTStartDBInstanceVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTStartDBInstanceVersionEnum: %v", v)
	}
}

type POSTStartDBInstanceRequest struct {
	Action            POSTStartDBInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RequestBody       []byte                         `request:"mediaType=text/xml"`
	Version           POSTStartDBInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTStartDBInstanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
