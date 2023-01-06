package shared

type ImportationCustomColumnList struct {
	CustomColumns []ImportationCustomColumn `json:"customColumns"`
	Links         CustomColumnListLinks     `json:"links"`
}
