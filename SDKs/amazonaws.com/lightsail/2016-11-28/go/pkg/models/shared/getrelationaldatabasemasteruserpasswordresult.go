package shared

type GetRelationalDatabaseMasterUserPasswordResult struct {
	CreatedAt          map[string]interface{} `json:"createdAt,omitempty"`
	MasterUserPassword *string                `json:"masterUserPassword,omitempty"`
}
