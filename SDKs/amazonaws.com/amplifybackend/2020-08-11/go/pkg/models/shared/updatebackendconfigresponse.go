package shared

// UpdateBackendConfigResponseLoginAuthConfig
// Describes the Amazon Cognito configurations for the Admin UI auth resource to log in with.
type UpdateBackendConfigResponseLoginAuthConfig struct {
	AwsCognitoIdentityPoolID map[string]interface{} `json:"AwsCognitoIdentityPoolId,omitempty"`
	AwsCognitoRegion         map[string]interface{} `json:"AwsCognitoRegion,omitempty"`
	AwsUserPoolsID           map[string]interface{} `json:"AwsUserPoolsId,omitempty"`
	AwsUserPoolsWebClientID  map[string]interface{} `json:"AwsUserPoolsWebClientId,omitempty"`
}

type UpdateBackendConfigResponse struct {
	AppID               map[string]interface{}                      `json:"AppId,omitempty"`
	BackendManagerAppID map[string]interface{}                      `json:"BackendManagerAppId,omitempty"`
	Error               map[string]interface{}                      `json:"Error,omitempty"`
	LoginAuthConfig     *UpdateBackendConfigResponseLoginAuthConfig `json:"LoginAuthConfig,omitempty"`
}
