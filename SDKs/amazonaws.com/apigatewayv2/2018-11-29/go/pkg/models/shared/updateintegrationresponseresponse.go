package shared

type UpdateIntegrationResponseResponse struct {
	ContentHandlingStrategy     map[string]interface{} `json:"ContentHandlingStrategy,omitempty"`
	IntegrationResponseID       map[string]interface{} `json:"IntegrationResponseId,omitempty"`
	IntegrationResponseKey      map[string]interface{} `json:"IntegrationResponseKey,omitempty"`
	ResponseParameters          map[string]string      `json:"ResponseParameters,omitempty"`
	ResponseTemplates           map[string]string      `json:"ResponseTemplates,omitempty"`
	TemplateSelectionExpression map[string]interface{} `json:"TemplateSelectionExpression,omitempty"`
}
