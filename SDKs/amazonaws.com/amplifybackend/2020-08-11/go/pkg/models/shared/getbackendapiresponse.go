package shared

// GetBackendAPIResponseResourceConfigConflictResolution
// The conflict resolution strategy for your data stored in the data models.
type GetBackendAPIResponseResourceConfigConflictResolution struct {
	ResolutionStrategy map[string]interface{} `json:"ResolutionStrategy,omitempty"`
}

// GetBackendAPIResponseResourceConfigDefaultAuthTypeSettings
// Describes settings for the authentication mode.
type GetBackendAPIResponseResourceConfigDefaultAuthTypeSettings struct {
	CognitoUserPoolID  map[string]interface{} `json:"CognitoUserPoolId,omitempty"`
	Description        map[string]interface{} `json:"Description,omitempty"`
	ExpirationTime     map[string]interface{} `json:"ExpirationTime,omitempty"`
	OpenIDAuthTTL      map[string]interface{} `json:"OpenIDAuthTTL,omitempty"`
	OpenIDClientID     map[string]interface{} `json:"OpenIDClientId,omitempty"`
	OpenIDIatTTL       map[string]interface{} `json:"OpenIDIatTTL,omitempty"`
	OpenIDIssueURL     map[string]interface{} `json:"OpenIDIssueURL,omitempty"`
	OpenIDProviderName map[string]interface{} `json:"OpenIDProviderName,omitempty"`
}

// GetBackendAPIResponseResourceConfigDefaultAuthType
// The default authentication type for interacting with the configured data models in your Amplify project.
type GetBackendAPIResponseResourceConfigDefaultAuthType struct {
	Mode     map[string]interface{}                                      `json:"Mode,omitempty"`
	Settings *GetBackendAPIResponseResourceConfigDefaultAuthTypeSettings `json:"Settings,omitempty"`
}

// GetBackendAPIResponseResourceConfig
// The resource configuration for this response object.
type GetBackendAPIResponseResourceConfig struct {
	AdditionalAuthTypes map[string]interface{}                                 `json:"AdditionalAuthTypes,omitempty"`
	APIName             map[string]interface{}                                 `json:"ApiName,omitempty"`
	ConflictResolution  *GetBackendAPIResponseResourceConfigConflictResolution `json:"ConflictResolution,omitempty"`
	DefaultAuthType     *GetBackendAPIResponseResourceConfigDefaultAuthType    `json:"DefaultAuthType,omitempty"`
	Service             map[string]interface{}                                 `json:"Service,omitempty"`
	TransformSchema     map[string]interface{}                                 `json:"TransformSchema,omitempty"`
}

type GetBackendAPIResponse struct {
	AppID                  map[string]interface{}               `json:"AppId,omitempty"`
	BackendEnvironmentName map[string]interface{}               `json:"BackendEnvironmentName,omitempty"`
	Error                  map[string]interface{}               `json:"Error,omitempty"`
	ResourceConfig         *GetBackendAPIResponseResourceConfig `json:"ResourceConfig,omitempty"`
	ResourceName           map[string]interface{}               `json:"ResourceName,omitempty"`
}
