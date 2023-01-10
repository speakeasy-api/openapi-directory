package shared

// ApplicationSource
// Represents an application source.
type ApplicationSource struct {
	CloudFormationStackARN *string     `json:"CloudFormationStackARN,omitempty"`
	TagFilters             []TagFilter `json:"TagFilters,omitempty"`
}
