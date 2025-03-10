// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// UpdateBucketXAmzTargetEnum
type UpdateBucketXAmzTargetEnum string

const (
	UpdateBucketXAmzTargetEnumLightsail20161128UpdateBucket UpdateBucketXAmzTargetEnum = "Lightsail_20161128.UpdateBucket"
)

func (e UpdateBucketXAmzTargetEnum) ToPointer() *UpdateBucketXAmzTargetEnum {
	return &e
}

func (e *UpdateBucketXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Lightsail_20161128.UpdateBucket":
		*e = UpdateBucketXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateBucketXAmzTargetEnum: %v", v)
	}
}

type UpdateBucketRequest struct {
	UpdateBucketRequest shared.UpdateBucketRequest `request:"mediaType=application/json"`
	XAmzAlgorithm       *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256   *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential      *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate            *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken   *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature       *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders   *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget          UpdateBucketXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateBucketResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	ContentType           string
	// InvalidInputException
	InvalidInputException interface{}
	// NotFoundException
	NotFoundException interface{}
	StatusCode        int
	RawResponse       *http.Response
	// ServiceException
	ServiceException interface{}
	// UnauthenticatedException
	UnauthenticatedException interface{}
	// Success
	UpdateBucketResult *shared.UpdateBucketResult
}
