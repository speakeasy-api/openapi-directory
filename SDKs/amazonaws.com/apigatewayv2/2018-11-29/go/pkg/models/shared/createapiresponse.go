package shared

type CreateAPIResponse struct {
	APIEndpoint               map[string]interface{} `json:"ApiEndpoint,omitempty"`
	APIGatewayManaged         map[string]interface{} `json:"ApiGatewayManaged,omitempty"`
	APIID                     map[string]interface{} `json:"ApiId,omitempty"`
	APIKeySelectionExpression map[string]interface{} `json:"ApiKeySelectionExpression,omitempty"`
	CorsConfiguration         map[string]interface{} `json:"CorsConfiguration,omitempty"`
	CreatedDate               map[string]interface{} `json:"CreatedDate,omitempty"`
	Description               map[string]interface{} `json:"Description,omitempty"`
	DisableExecuteAPIEndpoint map[string]interface{} `json:"DisableExecuteApiEndpoint,omitempty"`
	DisableSchemaValidation   map[string]interface{} `json:"DisableSchemaValidation,omitempty"`
	ImportInfo                map[string]interface{} `json:"ImportInfo,omitempty"`
	Name                      map[string]interface{} `json:"Name,omitempty"`
	ProtocolType              map[string]interface{} `json:"ProtocolType,omitempty"`
	RouteSelectionExpression  map[string]interface{} `json:"RouteSelectionExpression,omitempty"`
	Tags                      map[string]string      `json:"Tags,omitempty"`
	Version                   map[string]interface{} `json:"Version,omitempty"`
	Warnings                  map[string]interface{} `json:"Warnings,omitempty"`
}
