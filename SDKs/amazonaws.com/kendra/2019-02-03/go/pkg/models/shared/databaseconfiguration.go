package shared

// DatabaseConfiguration
// Provides the information necessary to connect a database to an index.
type DatabaseConfiguration struct {
	ACLConfiguration        *ACLConfiguration           `json:"AclConfiguration,omitempty"`
	ColumnConfiguration     ColumnConfiguration         `json:"ColumnConfiguration"`
	ConnectionConfiguration ConnectionConfiguration     `json:"ConnectionConfiguration"`
	DatabaseEngineType      DatabaseEngineTypeEnum      `json:"DatabaseEngineType"`
	SQLConfiguration        *SQLConfiguration           `json:"SqlConfiguration,omitempty"`
	VpcConfiguration        *DataSourceVpcConfiguration `json:"VpcConfiguration,omitempty"`
}
