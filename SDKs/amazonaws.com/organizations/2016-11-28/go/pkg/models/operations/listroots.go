// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// ListRootsXAmzTargetEnum
type ListRootsXAmzTargetEnum string

const (
	ListRootsXAmzTargetEnumAwsOrganizationsV20161128ListRoots ListRootsXAmzTargetEnum = "AWSOrganizationsV20161128.ListRoots"
)

func (e ListRootsXAmzTargetEnum) ToPointer() *ListRootsXAmzTargetEnum {
	return &e
}

func (e *ListRootsXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AWSOrganizationsV20161128.ListRoots":
		*e = ListRootsXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ListRootsXAmzTargetEnum: %v", v)
	}
}

type ListRootsRequest struct {
	ListRootsRequest shared.ListRootsRequest `request:"mediaType=application/json"`
	// Pagination limit
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	// Pagination token
	NextToken         *string                 `queryParam:"style=form,explode=true,name=NextToken"`
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRootsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListRootsResponse struct {
	// AWSOrganizationsNotInUseException
	AWSOrganizationsNotInUseException interface{}
	// AccessDeniedException
	AccessDeniedException interface{}
	ContentType           string
	// InvalidInputException
	InvalidInputException interface{}
	// Success
	ListRootsResponse *shared.ListRootsResponse
	// ServiceException
	ServiceException interface{}
	StatusCode       int
	RawResponse      *http.Response
	// TooManyRequestsException
	TooManyRequestsException interface{}
}
