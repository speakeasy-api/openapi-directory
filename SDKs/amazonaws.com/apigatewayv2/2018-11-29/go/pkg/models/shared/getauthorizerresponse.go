package shared

// GetAuthorizerResponseJwtConfiguration
// Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
type GetAuthorizerResponseJwtConfiguration struct {
	Audience map[string]interface{} `json:"Audience,omitempty"`
	Issuer   map[string]interface{} `json:"Issuer,omitempty"`
}

type GetAuthorizerResponse struct {
	AuthorizerCredentialsArn       map[string]interface{}                 `json:"AuthorizerCredentialsArn,omitempty"`
	AuthorizerID                   map[string]interface{}                 `json:"AuthorizerId,omitempty"`
	AuthorizerPayloadFormatVersion map[string]interface{}                 `json:"AuthorizerPayloadFormatVersion,omitempty"`
	AuthorizerResultTTLInSeconds   map[string]interface{}                 `json:"AuthorizerResultTtlInSeconds,omitempty"`
	AuthorizerType                 map[string]interface{}                 `json:"AuthorizerType,omitempty"`
	AuthorizerURI                  map[string]interface{}                 `json:"AuthorizerUri,omitempty"`
	EnableSimpleResponses          map[string]interface{}                 `json:"EnableSimpleResponses,omitempty"`
	IdentitySource                 map[string]interface{}                 `json:"IdentitySource,omitempty"`
	IdentityValidationExpression   map[string]interface{}                 `json:"IdentityValidationExpression,omitempty"`
	JwtConfiguration               *GetAuthorizerResponseJwtConfiguration `json:"JwtConfiguration,omitempty"`
	Name                           map[string]interface{}                 `json:"Name,omitempty"`
}
