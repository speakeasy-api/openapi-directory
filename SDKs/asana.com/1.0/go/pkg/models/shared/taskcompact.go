package shared

// TaskCompact
// The *task* is the basic object around which many operations in Asana are centered.
type TaskCompact struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}
