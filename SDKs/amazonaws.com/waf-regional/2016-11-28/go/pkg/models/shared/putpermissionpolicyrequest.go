package shared

type PutPermissionPolicyRequest struct {
	Policy      string                 `json:"Policy"`
	ResourceArn map[string]interface{} `json:"ResourceArn"`
}
