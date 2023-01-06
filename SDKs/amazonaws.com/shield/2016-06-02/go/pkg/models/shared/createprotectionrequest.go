package shared

type CreateProtectionRequest struct {
	Name        string                 `json:"Name"`
	ResourceArn string                 `json:"ResourceArn"`
	Tags        map[string]interface{} `json:"Tags,omitempty"`
}
