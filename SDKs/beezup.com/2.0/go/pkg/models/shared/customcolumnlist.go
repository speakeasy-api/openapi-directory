package shared

type CustomColumnList struct {
	CustomColumns []CustomColumn        `json:"customColumns"`
	Links         CustomColumnListLinks `json:"links"`
}
