// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// GetAccessTokenXAmzTargetEnum
type GetAccessTokenXAmzTargetEnum string

const (
	GetAccessTokenXAmzTargetEnumAwsLicenseManagerGetAccessToken GetAccessTokenXAmzTargetEnum = "AWSLicenseManager.GetAccessToken"
)

func (e GetAccessTokenXAmzTargetEnum) ToPointer() *GetAccessTokenXAmzTargetEnum {
	return &e
}

func (e *GetAccessTokenXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AWSLicenseManager.GetAccessToken":
		*e = GetAccessTokenXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetAccessTokenXAmzTargetEnum: %v", v)
	}
}

type GetAccessTokenRequest struct {
	GetAccessTokenRequest shared.GetAccessTokenRequest `request:"mediaType=application/json"`
	XAmzAlgorithm         *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256     *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential        *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate              *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken     *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature         *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders     *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget            GetAccessTokenXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetAccessTokenResponse struct {
	// AccessDeniedException
	AccessDeniedException interface{}
	// AuthorizationException
	AuthorizationException interface{}
	ContentType            string
	// Success
	GetAccessTokenResponse *shared.GetAccessTokenResponse
	// RateLimitExceededException
	RateLimitExceededException interface{}
	StatusCode                 int
	RawResponse                *http.Response
	// ServerInternalException
	ServerInternalException interface{}
	// ValidationException
	ValidationException interface{}
}
