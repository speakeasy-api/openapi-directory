// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// CreateUserProfileXAmzTargetEnum
type CreateUserProfileXAmzTargetEnum string

const (
	CreateUserProfileXAmzTargetEnumCodeStar20170419CreateUserProfile CreateUserProfileXAmzTargetEnum = "CodeStar_20170419.CreateUserProfile"
)

func (e CreateUserProfileXAmzTargetEnum) ToPointer() *CreateUserProfileXAmzTargetEnum {
	return &e
}

func (e *CreateUserProfileXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CodeStar_20170419.CreateUserProfile":
		*e = CreateUserProfileXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateUserProfileXAmzTargetEnum: %v", v)
	}
}

type CreateUserProfileRequest struct {
	CreateUserProfileRequest shared.CreateUserProfileRequest `request:"mediaType=application/json"`
	XAmzAlgorithm            *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256        *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential           *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                 *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken        *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature            *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders        *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget               CreateUserProfileXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateUserProfileResponse struct {
	ContentType string
	// Success
	CreateUserProfileResult *shared.CreateUserProfileResult
	StatusCode              int
	RawResponse             *http.Response
	// UserProfileAlreadyExistsException
	UserProfileAlreadyExistsException interface{}
	// ValidationException
	ValidationException interface{}
}
