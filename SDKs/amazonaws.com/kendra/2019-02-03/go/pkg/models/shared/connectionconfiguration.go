package shared

// ConnectionConfiguration
// Provides the information necessary to connect to a database.
type ConnectionConfiguration struct {
	DatabaseHost string `json:"DatabaseHost"`
	DatabaseName string `json:"DatabaseName"`
	DatabasePort int64  `json:"DatabasePort"`
	SecretArn    string `json:"SecretArn"`
	TableName    string `json:"TableName"`
}
