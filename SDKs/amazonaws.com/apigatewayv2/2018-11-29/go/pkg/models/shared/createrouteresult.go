package shared

type CreateRouteResult struct {
	APIGatewayManaged                map[string]interface{}          `json:"ApiGatewayManaged,omitempty"`
	APIKeyRequired                   map[string]interface{}          `json:"ApiKeyRequired,omitempty"`
	AuthorizationScopes              map[string]interface{}          `json:"AuthorizationScopes,omitempty"`
	AuthorizationType                map[string]interface{}          `json:"AuthorizationType,omitempty"`
	AuthorizerID                     map[string]interface{}          `json:"AuthorizerId,omitempty"`
	ModelSelectionExpression         map[string]interface{}          `json:"ModelSelectionExpression,omitempty"`
	OperationName                    map[string]interface{}          `json:"OperationName,omitempty"`
	RequestModels                    map[string]string               `json:"RequestModels,omitempty"`
	RequestParameters                map[string]ParameterConstraints `json:"RequestParameters,omitempty"`
	RouteID                          map[string]interface{}          `json:"RouteId,omitempty"`
	RouteKey                         map[string]interface{}          `json:"RouteKey,omitempty"`
	RouteResponseSelectionExpression map[string]interface{}          `json:"RouteResponseSelectionExpression,omitempty"`
	Target                           map[string]interface{}          `json:"Target,omitempty"`
}
