package shared

// DeploymentReadyOption1
// Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment.
type DeploymentReadyOption1 struct {
	ActionOnTimeout   map[string]interface{} `json:"actionOnTimeout,omitempty"`
	WaitTimeInMinutes *int64                 `json:"waitTimeInMinutes,omitempty"`
}
