package shared

// RunCommandParameters1
// This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command.
type RunCommandParameters1 struct {
	RunCommandTargets []RunCommandTarget1 `json:"RunCommandTargets"`
}
