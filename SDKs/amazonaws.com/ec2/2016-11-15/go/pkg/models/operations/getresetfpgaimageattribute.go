// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// GETResetFpgaImageAttributeActionEnum
type GETResetFpgaImageAttributeActionEnum string

const (
	GETResetFpgaImageAttributeActionEnumResetFpgaImageAttribute GETResetFpgaImageAttributeActionEnum = "ResetFpgaImageAttribute"
)

func (e GETResetFpgaImageAttributeActionEnum) ToPointer() *GETResetFpgaImageAttributeActionEnum {
	return &e
}

func (e *GETResetFpgaImageAttributeActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ResetFpgaImageAttribute":
		*e = GETResetFpgaImageAttributeActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETResetFpgaImageAttributeActionEnum: %v", v)
	}
}

// GETResetFpgaImageAttributeAttributeEnum - The attribute.
type GETResetFpgaImageAttributeAttributeEnum string

const (
	GETResetFpgaImageAttributeAttributeEnumLoadPermission GETResetFpgaImageAttributeAttributeEnum = "loadPermission"
)

func (e GETResetFpgaImageAttributeAttributeEnum) ToPointer() *GETResetFpgaImageAttributeAttributeEnum {
	return &e
}

func (e *GETResetFpgaImageAttributeAttributeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "loadPermission":
		*e = GETResetFpgaImageAttributeAttributeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETResetFpgaImageAttributeAttributeEnum: %v", v)
	}
}

// GETResetFpgaImageAttributeVersionEnum
type GETResetFpgaImageAttributeVersionEnum string

const (
	GETResetFpgaImageAttributeVersionEnumTwoThousandAndSixteen1115 GETResetFpgaImageAttributeVersionEnum = "2016-11-15"
)

func (e GETResetFpgaImageAttributeVersionEnum) ToPointer() *GETResetFpgaImageAttributeVersionEnum {
	return &e
}

func (e *GETResetFpgaImageAttributeVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2016-11-15":
		*e = GETResetFpgaImageAttributeVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETResetFpgaImageAttributeVersionEnum: %v", v)
	}
}

type GETResetFpgaImageAttributeRequest struct {
	Action GETResetFpgaImageAttributeActionEnum `queryParam:"style=form,explode=true,name=Action"`
	// The attribute.
	Attribute *GETResetFpgaImageAttributeAttributeEnum `queryParam:"style=form,explode=true,name=Attribute"`
	// Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
	DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
	// The ID of the AFI.
	FpgaImageID       string                                `queryParam:"style=form,explode=true,name=FpgaImageId"`
	Version           GETResetFpgaImageAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GETResetFpgaImageAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
