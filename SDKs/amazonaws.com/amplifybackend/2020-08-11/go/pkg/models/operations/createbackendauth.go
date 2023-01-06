package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBackendAuthPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type CreateBackendAuthHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateBackendAuthRequestBodyResourceConfig
// Defines the resource configuration when creating an auth resource in your Amplify project.
type CreateBackendAuthRequestBodyResourceConfig struct {
	AuthResources       map[string]interface{} `json:"AuthResources,omitempty"`
	IdentityPoolConfigs map[string]interface{} `json:"IdentityPoolConfigs,omitempty"`
	Service             map[string]interface{} `json:"Service,omitempty"`
	UserPoolConfigs     map[string]interface{} `json:"UserPoolConfigs,omitempty"`
}

type CreateBackendAuthRequestBody struct {
	BackendEnvironmentName string                                     `json:"backendEnvironmentName"`
	ResourceConfig         CreateBackendAuthRequestBodyResourceConfig `json:"resourceConfig"`
	ResourceName           string                                     `json:"resourceName"`
}

type CreateBackendAuthRequest struct {
	PathParams CreateBackendAuthPathParams
	Headers    CreateBackendAuthHeaders
	Request    CreateBackendAuthRequestBody `request:"mediaType=application/json"`
}

type CreateBackendAuthResponse struct {
	BadRequestException       *interface{}
	ContentType               string
	CreateBackendAuthResponse *shared.CreateBackendAuthResponse
	GatewayTimeoutException   *interface{}
	NotFoundException         *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
