package shared

type UpdateIntegrationResult struct {
	APIGatewayManaged                      map[string]interface{}       `json:"ApiGatewayManaged,omitempty"`
	ConnectionID                           map[string]interface{}       `json:"ConnectionId,omitempty"`
	ConnectionType                         map[string]interface{}       `json:"ConnectionType,omitempty"`
	ContentHandlingStrategy                map[string]interface{}       `json:"ContentHandlingStrategy,omitempty"`
	CredentialsArn                         map[string]interface{}       `json:"CredentialsArn,omitempty"`
	Description                            map[string]interface{}       `json:"Description,omitempty"`
	IntegrationID                          map[string]interface{}       `json:"IntegrationId,omitempty"`
	IntegrationMethod                      map[string]interface{}       `json:"IntegrationMethod,omitempty"`
	IntegrationResponseSelectionExpression map[string]interface{}       `json:"IntegrationResponseSelectionExpression,omitempty"`
	IntegrationSubtype                     map[string]interface{}       `json:"IntegrationSubtype,omitempty"`
	IntegrationType                        map[string]interface{}       `json:"IntegrationType,omitempty"`
	IntegrationURI                         map[string]interface{}       `json:"IntegrationUri,omitempty"`
	PassthroughBehavior                    map[string]interface{}       `json:"PassthroughBehavior,omitempty"`
	PayloadFormatVersion                   map[string]interface{}       `json:"PayloadFormatVersion,omitempty"`
	RequestParameters                      map[string]string            `json:"RequestParameters,omitempty"`
	RequestTemplates                       map[string]string            `json:"RequestTemplates,omitempty"`
	ResponseParameters                     map[string]map[string]string `json:"ResponseParameters,omitempty"`
	TemplateSelectionExpression            map[string]interface{}       `json:"TemplateSelectionExpression,omitempty"`
	TimeoutInMillis                        map[string]interface{}       `json:"TimeoutInMillis,omitempty"`
	TLSConfig                              map[string]interface{}       `json:"TlsConfig,omitempty"`
}
