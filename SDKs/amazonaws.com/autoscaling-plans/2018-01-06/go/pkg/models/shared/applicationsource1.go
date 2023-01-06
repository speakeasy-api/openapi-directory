package shared

// ApplicationSource1
// Represents an application source.
type ApplicationSource1 struct {
	CloudFormationStackARN *string     `json:"CloudFormationStackARN,omitempty"`
	TagFilters             []TagFilter `json:"TagFilters,omitempty"`
}
