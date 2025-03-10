// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// ListServicesXAmzTargetEnum
type ListServicesXAmzTargetEnum string

const (
	ListServicesXAmzTargetEnumServiceQuotasV20190624ListServices ListServicesXAmzTargetEnum = "ServiceQuotasV20190624.ListServices"
)

func (e ListServicesXAmzTargetEnum) ToPointer() *ListServicesXAmzTargetEnum {
	return &e
}

func (e *ListServicesXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ServiceQuotasV20190624.ListServices":
		*e = ListServicesXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ListServicesXAmzTargetEnum: %v", v)
	}
}

type ListServicesRequest struct {
	ListServicesRequest shared.ListServicesRequest `request:"mediaType=application/json"`
	// Pagination limit
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	// Pagination token
	NextToken         *string                    `queryParam:"style=form,explode=true,name=NextToken"`
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListServicesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListServicesResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	ContentType           string
	// IllegalArgumentException
	IllegalArgumentException interface{}
	// InvalidPaginationTokenException
	InvalidPaginationTokenException interface{}
	// Success
	ListServicesResponse *shared.ListServicesResponse
	// ServiceException
	ServiceException interface{}
	StatusCode       int
	RawResponse      *http.Response
	// TooManyRequestsException
	TooManyRequestsException interface{}
}
