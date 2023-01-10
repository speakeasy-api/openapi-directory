package operations

import (
	"openapi/pkg/models/shared"
)

type GetBackendAPIPathParams struct {
	AppID                  string `pathParam:"style=simple,explode=false,name=appId"`
	BackendEnvironmentName string `pathParam:"style=simple,explode=false,name=backendEnvironmentName"`
}

type GetBackendAPIHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// GetBackendAPIRequestBodyResourceConfigConflictResolution
// The conflict resolution strategy for your data stored in the data models.
type GetBackendAPIRequestBodyResourceConfigConflictResolution struct {
	ResolutionStrategy map[string]interface{} `json:"ResolutionStrategy,omitempty"`
}

// GetBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings
// Describes settings for the authentication mode.
type GetBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings struct {
	CognitoUserPoolID  map[string]interface{} `json:"CognitoUserPoolId,omitempty"`
	Description        map[string]interface{} `json:"Description,omitempty"`
	ExpirationTime     map[string]interface{} `json:"ExpirationTime,omitempty"`
	OpenIDAuthTTL      map[string]interface{} `json:"OpenIDAuthTTL,omitempty"`
	OpenIDClientID     map[string]interface{} `json:"OpenIDClientId,omitempty"`
	OpenIDIatTTL       map[string]interface{} `json:"OpenIDIatTTL,omitempty"`
	OpenIDIssueURL     map[string]interface{} `json:"OpenIDIssueURL,omitempty"`
	OpenIDProviderName map[string]interface{} `json:"OpenIDProviderName,omitempty"`
}

// GetBackendAPIRequestBodyResourceConfigDefaultAuthType
// The default authentication type for interacting with the configured data models in your Amplify project.
type GetBackendAPIRequestBodyResourceConfigDefaultAuthType struct {
	Mode     map[string]interface{}                                         `json:"Mode,omitempty"`
	Settings *GetBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings `json:"Settings,omitempty"`
}

// GetBackendAPIRequestBodyResourceConfig
// The resource config for the data model, configured as a part of the Amplify project.
type GetBackendAPIRequestBodyResourceConfig struct {
	AdditionalAuthTypes map[string]interface{}                                    `json:"AdditionalAuthTypes,omitempty"`
	APIName             map[string]interface{}                                    `json:"ApiName,omitempty"`
	ConflictResolution  *GetBackendAPIRequestBodyResourceConfigConflictResolution `json:"ConflictResolution,omitempty"`
	DefaultAuthType     *GetBackendAPIRequestBodyResourceConfigDefaultAuthType    `json:"DefaultAuthType,omitempty"`
	Service             map[string]interface{}                                    `json:"Service,omitempty"`
	TransformSchema     map[string]interface{}                                    `json:"TransformSchema,omitempty"`
}

type GetBackendAPIRequestBody struct {
	ResourceConfig *GetBackendAPIRequestBodyResourceConfig `json:"resourceConfig,omitempty"`
	ResourceName   string                                  `json:"resourceName"`
}

type GetBackendAPIRequest struct {
	PathParams GetBackendAPIPathParams
	Headers    GetBackendAPIHeaders
	Request    GetBackendAPIRequestBody `request:"mediaType=application/json"`
}

type GetBackendAPIResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GatewayTimeoutException  *interface{}
	GetBackendAPIResponse    *shared.GetBackendAPIResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
