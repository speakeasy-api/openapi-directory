// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// DeleteWorkspaceImageXAmzTargetEnum
type DeleteWorkspaceImageXAmzTargetEnum string

const (
	DeleteWorkspaceImageXAmzTargetEnumWorkspacesServiceDeleteWorkspaceImage DeleteWorkspaceImageXAmzTargetEnum = "WorkspacesService.DeleteWorkspaceImage"
)

func (e DeleteWorkspaceImageXAmzTargetEnum) ToPointer() *DeleteWorkspaceImageXAmzTargetEnum {
	return &e
}

func (e *DeleteWorkspaceImageXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "WorkspacesService.DeleteWorkspaceImage":
		*e = DeleteWorkspaceImageXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DeleteWorkspaceImageXAmzTargetEnum: %v", v)
	}
}

type DeleteWorkspaceImageRequest struct {
	DeleteWorkspaceImageRequest shared.DeleteWorkspaceImageRequest `request:"mediaType=application/json"`
	XAmzAlgorithm               *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256           *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential              *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                    *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken           *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature               *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders           *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                  DeleteWorkspaceImageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteWorkspaceImageResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	ContentType           string
	// Success
	DeleteWorkspaceImageResult map[string]interface{}
	// InvalidResourceStateException
	InvalidResourceStateException interface{}
	// ResourceAssociatedException
	ResourceAssociatedException interface{}
	StatusCode                  int
	RawResponse                 *http.Response
}
