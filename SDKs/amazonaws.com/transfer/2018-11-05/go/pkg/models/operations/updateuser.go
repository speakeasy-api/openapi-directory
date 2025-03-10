// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// UpdateUserXAmzTargetEnum
type UpdateUserXAmzTargetEnum string

const (
	UpdateUserXAmzTargetEnumTransferServiceUpdateUser UpdateUserXAmzTargetEnum = "TransferService.UpdateUser"
)

func (e UpdateUserXAmzTargetEnum) ToPointer() *UpdateUserXAmzTargetEnum {
	return &e
}

func (e *UpdateUserXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "TransferService.UpdateUser":
		*e = UpdateUserXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateUserXAmzTargetEnum: %v", v)
	}
}

type UpdateUserRequest struct {
	UpdateUserRequest shared.UpdateUserRequest `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateUserXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateUserResponse struct {
	ContentType string
	// InternalServiceError
	InternalServiceError interface{}
	// InvalidRequestException
	InvalidRequestException interface{}
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	StatusCode                int
	RawResponse               *http.Response
	// ServiceUnavailableException
	ServiceUnavailableException interface{}
	// ThrottlingException
	ThrottlingException interface{}
	// Success
	UpdateUserResponse *shared.UpdateUserResponse
}
