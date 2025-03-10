// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// StopAccessLoggingXAmzTargetEnum
type StopAccessLoggingXAmzTargetEnum string

const (
	StopAccessLoggingXAmzTargetEnumMediaStore20170901StopAccessLogging StopAccessLoggingXAmzTargetEnum = "MediaStore_20170901.StopAccessLogging"
)

func (e StopAccessLoggingXAmzTargetEnum) ToPointer() *StopAccessLoggingXAmzTargetEnum {
	return &e
}

func (e *StopAccessLoggingXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "MediaStore_20170901.StopAccessLogging":
		*e = StopAccessLoggingXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for StopAccessLoggingXAmzTargetEnum: %v", v)
	}
}

type StopAccessLoggingRequest struct {
	StopAccessLoggingInput shared.StopAccessLoggingInput   `request:"mediaType=application/json"`
	XAmzAlgorithm          *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256      *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential         *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate               *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken      *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature          *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders      *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget             StopAccessLoggingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopAccessLoggingResponse struct {
	// ContainerInUseException
	ContainerInUseException interface{}
	// ContainerNotFoundException
	ContainerNotFoundException interface{}
	ContentType                string
	// InternalServerError
	InternalServerError interface{}
	StatusCode          int
	RawResponse         *http.Response
	// Success
	StopAccessLoggingOutput map[string]interface{}
}
