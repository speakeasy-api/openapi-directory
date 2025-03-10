// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// ListWorkflowTypesXAmzTargetEnum
type ListWorkflowTypesXAmzTargetEnum string

const (
	ListWorkflowTypesXAmzTargetEnumSimpleWorkflowServiceListWorkflowTypes ListWorkflowTypesXAmzTargetEnum = "SimpleWorkflowService.ListWorkflowTypes"
)

func (e ListWorkflowTypesXAmzTargetEnum) ToPointer() *ListWorkflowTypesXAmzTargetEnum {
	return &e
}

func (e *ListWorkflowTypesXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "SimpleWorkflowService.ListWorkflowTypes":
		*e = ListWorkflowTypesXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ListWorkflowTypesXAmzTargetEnum: %v", v)
	}
}

type ListWorkflowTypesRequest struct {
	ListWorkflowTypesInput shared.ListWorkflowTypesInput   `request:"mediaType=application/json"`
	XAmzAlgorithm          *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256      *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential         *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate               *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken      *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature          *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders      *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget             ListWorkflowTypesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
	// Pagination limit
	MaximumPageSize *string `queryParam:"style=form,explode=true,name=maximumPageSize"`
	// Pagination token
	NextPageToken *string `queryParam:"style=form,explode=true,name=nextPageToken"`
}

type ListWorkflowTypesResponse struct {
	ContentType string
	// OperationNotPermittedFault
	OperationNotPermittedFault interface{}
	StatusCode                 int
	RawResponse                *http.Response
	// UnknownResourceFault
	UnknownResourceFault interface{}
	// Success
	WorkflowTypeInfos *shared.WorkflowTypeInfos
}
