package shared

type UpdateStageResponse struct {
	AccessLogSettings           map[string]interface{}   `json:"AccessLogSettings,omitempty"`
	APIGatewayManaged           map[string]interface{}   `json:"ApiGatewayManaged,omitempty"`
	AutoDeploy                  map[string]interface{}   `json:"AutoDeploy,omitempty"`
	ClientCertificateID         map[string]interface{}   `json:"ClientCertificateId,omitempty"`
	CreatedDate                 map[string]interface{}   `json:"CreatedDate,omitempty"`
	DefaultRouteSettings        map[string]interface{}   `json:"DefaultRouteSettings,omitempty"`
	DeploymentID                map[string]interface{}   `json:"DeploymentId,omitempty"`
	Description                 map[string]interface{}   `json:"Description,omitempty"`
	LastDeploymentStatusMessage map[string]interface{}   `json:"LastDeploymentStatusMessage,omitempty"`
	LastUpdatedDate             map[string]interface{}   `json:"LastUpdatedDate,omitempty"`
	RouteSettings               map[string]RouteSettings `json:"RouteSettings,omitempty"`
	StageName                   map[string]interface{}   `json:"StageName,omitempty"`
	StageVariables              map[string]string        `json:"StageVariables,omitempty"`
	Tags                        map[string]string        `json:"Tags,omitempty"`
}
