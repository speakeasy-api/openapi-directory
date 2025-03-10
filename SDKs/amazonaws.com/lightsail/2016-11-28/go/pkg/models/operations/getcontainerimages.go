// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// GetContainerImagesXAmzTargetEnum
type GetContainerImagesXAmzTargetEnum string

const (
	GetContainerImagesXAmzTargetEnumLightsail20161128GetContainerImages GetContainerImagesXAmzTargetEnum = "Lightsail_20161128.GetContainerImages"
)

func (e GetContainerImagesXAmzTargetEnum) ToPointer() *GetContainerImagesXAmzTargetEnum {
	return &e
}

func (e *GetContainerImagesXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Lightsail_20161128.GetContainerImages":
		*e = GetContainerImagesXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetContainerImagesXAmzTargetEnum: %v", v)
	}
}

type GetContainerImagesRequest struct {
	GetContainerImagesRequest shared.GetContainerImagesRequest `request:"mediaType=application/json"`
	XAmzAlgorithm             *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256         *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential            *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                  *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken         *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature             *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders         *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                GetContainerImagesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetContainerImagesResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	ContentType           string
	// Success
	GetContainerImagesResult *shared.GetContainerImagesResult
	// InvalidInputException
	InvalidInputException interface{}
	// NotFoundException
	NotFoundException interface{}
	// ServiceException
	ServiceException interface{}
	StatusCode       int
	RawResponse      *http.Response
	// UnauthenticatedException
	UnauthenticatedException interface{}
}
