// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// DeleteNotebookInstanceXAmzTargetEnum
type DeleteNotebookInstanceXAmzTargetEnum string

const (
	DeleteNotebookInstanceXAmzTargetEnumSageMakerDeleteNotebookInstance DeleteNotebookInstanceXAmzTargetEnum = "SageMaker.DeleteNotebookInstance"
)

func (e DeleteNotebookInstanceXAmzTargetEnum) ToPointer() *DeleteNotebookInstanceXAmzTargetEnum {
	return &e
}

func (e *DeleteNotebookInstanceXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "SageMaker.DeleteNotebookInstance":
		*e = DeleteNotebookInstanceXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DeleteNotebookInstanceXAmzTargetEnum: %v", v)
	}
}

type DeleteNotebookInstanceRequest struct {
	DeleteNotebookInstanceInput shared.DeleteNotebookInstanceInput   `request:"mediaType=application/json"`
	XAmzAlgorithm               *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256           *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential              *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                    *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken           *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature               *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders           *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                  DeleteNotebookInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteNotebookInstanceResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
