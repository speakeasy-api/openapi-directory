// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// GetLifecyclePolicyXAmzTargetEnum
type GetLifecyclePolicyXAmzTargetEnum string

const (
	GetLifecyclePolicyXAmzTargetEnumMediaStore20170901GetLifecyclePolicy GetLifecyclePolicyXAmzTargetEnum = "MediaStore_20170901.GetLifecyclePolicy"
)

func (e GetLifecyclePolicyXAmzTargetEnum) ToPointer() *GetLifecyclePolicyXAmzTargetEnum {
	return &e
}

func (e *GetLifecyclePolicyXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "MediaStore_20170901.GetLifecyclePolicy":
		*e = GetLifecyclePolicyXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetLifecyclePolicyXAmzTargetEnum: %v", v)
	}
}

type GetLifecyclePolicyRequest struct {
	GetLifecyclePolicyInput shared.GetLifecyclePolicyInput   `request:"mediaType=application/json"`
	XAmzAlgorithm           *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256       *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential          *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken       *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature           *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders       *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget              GetLifecyclePolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetLifecyclePolicyResponse struct {
	// ContainerInUseException
	ContainerInUseException interface{}
	// ContainerNotFoundException
	ContainerNotFoundException interface{}
	ContentType                string
	// Success
	GetLifecyclePolicyOutput *shared.GetLifecyclePolicyOutput
	// InternalServerError
	InternalServerError interface{}
	// PolicyNotFoundException
	PolicyNotFoundException interface{}
	StatusCode              int
	RawResponse             *http.Response
}
