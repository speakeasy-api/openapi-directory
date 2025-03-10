// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// DeleteHsmXAmzTargetEnum
type DeleteHsmXAmzTargetEnum string

const (
	DeleteHsmXAmzTargetEnumCloudHsmFrontendServiceDeleteHsm DeleteHsmXAmzTargetEnum = "CloudHsmFrontendService.DeleteHsm"
)

func (e DeleteHsmXAmzTargetEnum) ToPointer() *DeleteHsmXAmzTargetEnum {
	return &e
}

func (e *DeleteHsmXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CloudHsmFrontendService.DeleteHsm":
		*e = DeleteHsmXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DeleteHsmXAmzTargetEnum: %v", v)
	}
}

type DeleteHsmRequest struct {
	DeleteHsmRequest  shared.DeleteHsmRequest `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteHsmXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteHsmResponse struct {
	// CloudHsmInternalException
	CloudHsmInternalException interface{}
	// CloudHsmServiceException
	CloudHsmServiceException interface{}
	ContentType              string
	// Success
	DeleteHsmResponse *shared.DeleteHsmResponse
	// InvalidRequestException
	InvalidRequestException interface{}
	StatusCode              int
	RawResponse             *http.Response
}
