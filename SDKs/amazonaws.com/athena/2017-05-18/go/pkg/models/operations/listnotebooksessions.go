// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// ListNotebookSessionsXAmzTargetEnum
type ListNotebookSessionsXAmzTargetEnum string

const (
	ListNotebookSessionsXAmzTargetEnumAmazonAthenaListNotebookSessions ListNotebookSessionsXAmzTargetEnum = "AmazonAthena.ListNotebookSessions"
)

func (e ListNotebookSessionsXAmzTargetEnum) ToPointer() *ListNotebookSessionsXAmzTargetEnum {
	return &e
}

func (e *ListNotebookSessionsXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AmazonAthena.ListNotebookSessions":
		*e = ListNotebookSessionsXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ListNotebookSessionsXAmzTargetEnum: %v", v)
	}
}

type ListNotebookSessionsRequest struct {
	ListNotebookSessionsRequest shared.ListNotebookSessionsRequest `request:"mediaType=application/json"`
	XAmzAlgorithm               *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256           *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential              *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                    *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken           *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature               *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders           *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                  ListNotebookSessionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListNotebookSessionsResponse struct {
	ContentType string
	// InternalServerException
	InternalServerException interface{}
	// InvalidRequestException
	InvalidRequestException interface{}
	// Success
	ListNotebookSessionsResponse *shared.ListNotebookSessionsResponse
	StatusCode                   int
	RawResponse                  *http.Response
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
}
