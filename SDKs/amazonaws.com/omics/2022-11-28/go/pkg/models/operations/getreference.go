// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// GetReferenceFileEnum - The file to retrieve.
type GetReferenceFileEnum string

const (
	GetReferenceFileEnumSource GetReferenceFileEnum = "SOURCE"
	GetReferenceFileEnumIndex  GetReferenceFileEnum = "INDEX"
)

func (e GetReferenceFileEnum) ToPointer() *GetReferenceFileEnum {
	return &e
}

func (e *GetReferenceFileEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "SOURCE":
		fallthrough
	case "INDEX":
		*e = GetReferenceFileEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetReferenceFileEnum: %v", v)
	}
}

type GetReferenceRequest struct {
	// The range to retrieve.
	Range             *string `header:"style=simple,explode=false,name=Range"`
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The file to retrieve.
	File *GetReferenceFileEnum `queryParam:"style=form,explode=true,name=file"`
	// The reference's ID.
	ID string `pathParam:"style=simple,explode=false,name=id"`
	// The part number to retrieve.
	PartNumber int64 `queryParam:"style=form,explode=true,name=partNumber"`
	// The reference's store ID.
	ReferenceStoreID string `pathParam:"style=simple,explode=false,name=referenceStoreId"`
}

type GetReferenceResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	ContentType           string
	// Success
	GetReferenceResponse *shared.GetReferenceResponse
	// InternalServerException
	InternalServerException interface{}
	// RangeNotSatisfiableException
	RangeNotSatisfiableException interface{}
	// RequestTimeoutException
	RequestTimeoutException interface{}
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	StatusCode                int
	RawResponse               *http.Response
	// ThrottlingException
	ThrottlingException interface{}
	// ValidationException
	ValidationException interface{}
}
