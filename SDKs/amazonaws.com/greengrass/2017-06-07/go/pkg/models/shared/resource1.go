package shared

// Resource1
// Information about a resource.
type Resource1 struct {
	ID                    string                 `json:"Id"`
	Name                  string                 `json:"Name"`
	ResourceDataContainer ResourceDataContainer1 `json:"ResourceDataContainer"`
}
