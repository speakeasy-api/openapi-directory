package shared

// ApplicationSource
// Represents an application source.
type ApplicationSource struct {
	CloudFormationStackARN map[string]interface{} `json:"CloudFormationStackARN,omitempty"`
	TagFilters             []TagFilter            `json:"TagFilters,omitempty"`
}
