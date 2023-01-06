package shared

// BlueGreenDeploymentConfiguration1
// Information about blue/green deployment options for a deployment group.
type BlueGreenDeploymentConfiguration1 struct {
	DeploymentReadyOption                     *DeploymentReadyOption1        `json:"deploymentReadyOption,omitempty"`
	GreenFleetProvisioningOption              *GreenFleetProvisioningOption1 `json:"greenFleetProvisioningOption,omitempty"`
	TerminateBlueInstancesOnDeploymentSuccess *BlueInstanceTerminationOption `json:"terminateBlueInstancesOnDeploymentSuccess,omitempty"`
}
