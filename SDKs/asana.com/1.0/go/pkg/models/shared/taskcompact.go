package shared

// TaskCompact
// The *task* is the basic object around which many operations in Asana are centered.
type TaskCompact struct {
	Name *string `json:"name,omitempty"`
}
