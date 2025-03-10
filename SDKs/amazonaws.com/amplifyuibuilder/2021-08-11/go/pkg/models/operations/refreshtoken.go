// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// RefreshTokenRequestBodyRefreshTokenBody - Describes a refresh token.
type RefreshTokenRequestBodyRefreshTokenBody struct {
	ClientID *string `json:"clientId,omitempty"`
	Token    *string `json:"token,omitempty"`
}

type RefreshTokenRequestBody struct {
	// Describes a refresh token.
	RefreshTokenBody RefreshTokenRequestBodyRefreshTokenBody `json:"refreshTokenBody"`
}

// RefreshTokenProviderEnum - The third-party provider for the token. The only valid value is <code>figma</code>.
type RefreshTokenProviderEnum string

const (
	RefreshTokenProviderEnumFigma RefreshTokenProviderEnum = "figma"
)

func (e RefreshTokenProviderEnum) ToPointer() *RefreshTokenProviderEnum {
	return &e
}

func (e *RefreshTokenProviderEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "figma":
		*e = RefreshTokenProviderEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for RefreshTokenProviderEnum: %v", v)
	}
}

type RefreshTokenRequest struct {
	RequestBody       RefreshTokenRequestBody `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The third-party provider for the token. The only valid value is <code>figma</code>.
	Provider RefreshTokenProviderEnum `pathParam:"style=simple,explode=false,name=provider"`
}

type RefreshTokenResponse struct {
	ContentType string
	// InvalidParameterException
	InvalidParameterException interface{}
	// Success
	RefreshTokenResponse *shared.RefreshTokenResponse
	StatusCode           int
	RawResponse          *http.Response
}
