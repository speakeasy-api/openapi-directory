package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBackendAPIPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type CreateBackendAPIHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateBackendAPIRequestBodyResourceConfigConflictResolution
// The conflict resolution strategy for your data stored in the data models.
type CreateBackendAPIRequestBodyResourceConfigConflictResolution struct {
	ResolutionStrategy map[string]interface{} `json:"ResolutionStrategy,omitempty"`
}

// CreateBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings
// Describes settings for the authentication mode.
type CreateBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings struct {
	CognitoUserPoolID  map[string]interface{} `json:"CognitoUserPoolId,omitempty"`
	Description        map[string]interface{} `json:"Description,omitempty"`
	ExpirationTime     map[string]interface{} `json:"ExpirationTime,omitempty"`
	OpenIDAuthTTL      map[string]interface{} `json:"OpenIDAuthTTL,omitempty"`
	OpenIDClientID     map[string]interface{} `json:"OpenIDClientId,omitempty"`
	OpenIDIatTTL       map[string]interface{} `json:"OpenIDIatTTL,omitempty"`
	OpenIDIssueURL     map[string]interface{} `json:"OpenIDIssueURL,omitempty"`
	OpenIDProviderName map[string]interface{} `json:"OpenIDProviderName,omitempty"`
}

// CreateBackendAPIRequestBodyResourceConfigDefaultAuthType
// The default authentication type for interacting with the configured data models in your Amplify project.
type CreateBackendAPIRequestBodyResourceConfigDefaultAuthType struct {
	Mode     map[string]interface{}                                            `json:"Mode,omitempty"`
	Settings *CreateBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings `json:"Settings,omitempty"`
}

// CreateBackendAPIRequestBodyResourceConfig
// The resource config for the data model, configured as a part of the Amplify project.
type CreateBackendAPIRequestBodyResourceConfig struct {
	AdditionalAuthTypes map[string]interface{}                                       `json:"AdditionalAuthTypes,omitempty"`
	APIName             map[string]interface{}                                       `json:"ApiName,omitempty"`
	ConflictResolution  *CreateBackendAPIRequestBodyResourceConfigConflictResolution `json:"ConflictResolution,omitempty"`
	DefaultAuthType     *CreateBackendAPIRequestBodyResourceConfigDefaultAuthType    `json:"DefaultAuthType,omitempty"`
	Service             map[string]interface{}                                       `json:"Service,omitempty"`
	TransformSchema     map[string]interface{}                                       `json:"TransformSchema,omitempty"`
}

type CreateBackendAPIRequestBody struct {
	BackendEnvironmentName string                                    `json:"backendEnvironmentName"`
	ResourceConfig         CreateBackendAPIRequestBodyResourceConfig `json:"resourceConfig"`
	ResourceName           string                                    `json:"resourceName"`
}

type CreateBackendAPIRequest struct {
	PathParams CreateBackendAPIPathParams
	Headers    CreateBackendAPIHeaders
	Request    CreateBackendAPIRequestBody `request:"mediaType=application/json"`
}

type CreateBackendAPIResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	CreateBackendAPIResponse *shared.CreateBackendAPIResponse
	GatewayTimeoutException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
