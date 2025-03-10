// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// StopSessionXAmzTargetEnum
type StopSessionXAmzTargetEnum string

const (
	StopSessionXAmzTargetEnumAwsGlueStopSession StopSessionXAmzTargetEnum = "AWSGlue.StopSession"
)

func (e StopSessionXAmzTargetEnum) ToPointer() *StopSessionXAmzTargetEnum {
	return &e
}

func (e *StopSessionXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AWSGlue.StopSession":
		*e = StopSessionXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for StopSessionXAmzTargetEnum: %v", v)
	}
}

type StopSessionRequest struct {
	StopSessionRequest shared.StopSessionRequest `request:"mediaType=application/json"`
	XAmzAlgorithm      *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256  *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential     *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate           *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken  *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature      *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders  *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget         StopSessionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopSessionResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	// ConcurrentModificationException
	ConcurrentModificationException interface{}
	ContentType                     string
	// IllegalSessionStateException
	IllegalSessionStateException interface{}
	// InternalServiceException
	InternalServiceException interface{}
	// InvalidInputException
	InvalidInputException interface{}
	// OperationTimeoutException
	OperationTimeoutException interface{}
	StatusCode                int
	RawResponse               *http.Response
	// Success
	StopSessionResponse *shared.StopSessionResponse
}
