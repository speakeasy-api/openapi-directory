// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// GETDeleteConfigurationSetActionEnum
type GETDeleteConfigurationSetActionEnum string

const (
	GETDeleteConfigurationSetActionEnumDeleteConfigurationSet GETDeleteConfigurationSetActionEnum = "DeleteConfigurationSet"
)

func (e GETDeleteConfigurationSetActionEnum) ToPointer() *GETDeleteConfigurationSetActionEnum {
	return &e
}

func (e *GETDeleteConfigurationSetActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DeleteConfigurationSet":
		*e = GETDeleteConfigurationSetActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETDeleteConfigurationSetActionEnum: %v", v)
	}
}

// GETDeleteConfigurationSetVersionEnum
type GETDeleteConfigurationSetVersionEnum string

const (
	GETDeleteConfigurationSetVersionEnumTwoThousandAndTen1201 GETDeleteConfigurationSetVersionEnum = "2010-12-01"
)

func (e GETDeleteConfigurationSetVersionEnum) ToPointer() *GETDeleteConfigurationSetVersionEnum {
	return &e
}

func (e *GETDeleteConfigurationSetVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2010-12-01":
		*e = GETDeleteConfigurationSetVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETDeleteConfigurationSetVersionEnum: %v", v)
	}
}

type GETDeleteConfigurationSetRequest struct {
	Action GETDeleteConfigurationSetActionEnum `queryParam:"style=form,explode=true,name=Action"`
	// The name of the configuration set to delete.
	ConfigurationSetName string                               `queryParam:"style=form,explode=true,name=ConfigurationSetName"`
	Version              GETDeleteConfigurationSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm        *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate             *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken    *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature        *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GETDeleteConfigurationSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
