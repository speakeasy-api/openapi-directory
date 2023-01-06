package shared

type CreateDeploymentResponse struct {
	AutoDeployed            map[string]interface{} `json:"AutoDeployed,omitempty"`
	CreatedDate             map[string]interface{} `json:"CreatedDate,omitempty"`
	DeploymentID            map[string]interface{} `json:"DeploymentId,omitempty"`
	DeploymentStatus        map[string]interface{} `json:"DeploymentStatus,omitempty"`
	DeploymentStatusMessage map[string]interface{} `json:"DeploymentStatusMessage,omitempty"`
	Description             map[string]interface{} `json:"Description,omitempty"`
}
