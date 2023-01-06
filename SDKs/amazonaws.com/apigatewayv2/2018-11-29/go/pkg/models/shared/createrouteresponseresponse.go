package shared

type CreateRouteResponseResponse struct {
	ModelSelectionExpression map[string]interface{}          `json:"ModelSelectionExpression,omitempty"`
	ResponseModels           map[string]string               `json:"ResponseModels,omitempty"`
	ResponseParameters       map[string]ParameterConstraints `json:"ResponseParameters,omitempty"`
	RouteResponseID          map[string]interface{}          `json:"RouteResponseId,omitempty"`
	RouteResponseKey         map[string]interface{}          `json:"RouteResponseKey,omitempty"`
}
