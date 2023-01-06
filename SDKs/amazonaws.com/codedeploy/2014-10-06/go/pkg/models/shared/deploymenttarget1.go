package shared

// DeploymentTarget1
//
//	Information about the deployment target.
type DeploymentTarget1 struct {
	CloudFormationTarget *CloudFormationTarget1    `json:"cloudFormationTarget,omitempty"`
	DeploymentTargetType *DeploymentTargetTypeEnum `json:"deploymentTargetType,omitempty"`
	EcsTarget            *EcsTarget                `json:"ecsTarget,omitempty"`
	InstanceTarget       *InstanceTarget           `json:"instanceTarget,omitempty"`
	LambdaTarget         *LambdaTarget             `json:"lambdaTarget,omitempty"`
}
