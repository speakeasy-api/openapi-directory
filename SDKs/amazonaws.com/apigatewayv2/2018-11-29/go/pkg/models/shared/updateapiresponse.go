package shared

// UpdateAPIResponseCorsConfiguration
// A CORS configuration. Supported only for HTTP APIs.
type UpdateAPIResponseCorsConfiguration struct {
	AllowCredentials map[string]interface{} `json:"AllowCredentials,omitempty"`
	AllowHeaders     map[string]interface{} `json:"AllowHeaders,omitempty"`
	AllowMethods     map[string]interface{} `json:"AllowMethods,omitempty"`
	AllowOrigins     map[string]interface{} `json:"AllowOrigins,omitempty"`
	ExposeHeaders    map[string]interface{} `json:"ExposeHeaders,omitempty"`
	MaxAge           map[string]interface{} `json:"MaxAge,omitempty"`
}

type UpdateAPIResponse struct {
	APIEndpoint               map[string]interface{}              `json:"ApiEndpoint,omitempty"`
	APIGatewayManaged         map[string]interface{}              `json:"ApiGatewayManaged,omitempty"`
	APIID                     map[string]interface{}              `json:"ApiId,omitempty"`
	APIKeySelectionExpression map[string]interface{}              `json:"ApiKeySelectionExpression,omitempty"`
	CorsConfiguration         *UpdateAPIResponseCorsConfiguration `json:"CorsConfiguration,omitempty"`
	CreatedDate               map[string]interface{}              `json:"CreatedDate,omitempty"`
	Description               map[string]interface{}              `json:"Description,omitempty"`
	DisableExecuteAPIEndpoint map[string]interface{}              `json:"DisableExecuteApiEndpoint,omitempty"`
	DisableSchemaValidation   map[string]interface{}              `json:"DisableSchemaValidation,omitempty"`
	ImportInfo                map[string]interface{}              `json:"ImportInfo,omitempty"`
	Name                      map[string]interface{}              `json:"Name,omitempty"`
	ProtocolType              map[string]interface{}              `json:"ProtocolType,omitempty"`
	RouteSelectionExpression  map[string]interface{}              `json:"RouteSelectionExpression,omitempty"`
	Tags                      map[string]string                   `json:"Tags,omitempty"`
	Version                   map[string]interface{}              `json:"Version,omitempty"`
	Warnings                  map[string]interface{}              `json:"Warnings,omitempty"`
}
