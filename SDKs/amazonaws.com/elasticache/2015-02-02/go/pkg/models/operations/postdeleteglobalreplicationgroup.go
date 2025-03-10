// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// POSTDeleteGlobalReplicationGroupActionEnum
type POSTDeleteGlobalReplicationGroupActionEnum string

const (
	POSTDeleteGlobalReplicationGroupActionEnumDeleteGlobalReplicationGroup POSTDeleteGlobalReplicationGroupActionEnum = "DeleteGlobalReplicationGroup"
)

func (e POSTDeleteGlobalReplicationGroupActionEnum) ToPointer() *POSTDeleteGlobalReplicationGroupActionEnum {
	return &e
}

func (e *POSTDeleteGlobalReplicationGroupActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DeleteGlobalReplicationGroup":
		*e = POSTDeleteGlobalReplicationGroupActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTDeleteGlobalReplicationGroupActionEnum: %v", v)
	}
}

// POSTDeleteGlobalReplicationGroupVersionEnum
type POSTDeleteGlobalReplicationGroupVersionEnum string

const (
	POSTDeleteGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202 POSTDeleteGlobalReplicationGroupVersionEnum = "2015-02-02"
)

func (e POSTDeleteGlobalReplicationGroupVersionEnum) ToPointer() *POSTDeleteGlobalReplicationGroupVersionEnum {
	return &e
}

func (e *POSTDeleteGlobalReplicationGroupVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2015-02-02":
		*e = POSTDeleteGlobalReplicationGroupVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for POSTDeleteGlobalReplicationGroupVersionEnum: %v", v)
	}
}

type POSTDeleteGlobalReplicationGroupRequest struct {
	Action            POSTDeleteGlobalReplicationGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RequestBody       []byte                                      `request:"mediaType=text/xml"`
	Version           POSTDeleteGlobalReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type POSTDeleteGlobalReplicationGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
