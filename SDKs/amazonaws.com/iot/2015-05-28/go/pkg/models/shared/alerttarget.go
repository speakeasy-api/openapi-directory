package shared

type AlertTarget struct {
	AlertTargetArn *string `json:"alertTargetArn,omitempty"`
	RoleArn        *string `json:"roleArn,omitempty"`
}
