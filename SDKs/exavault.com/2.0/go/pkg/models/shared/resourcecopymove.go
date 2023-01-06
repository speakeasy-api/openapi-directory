package shared

// ResourceCopyMove
// Resource which was successfully copied or moved.
type ResourceCopyMove struct {
	Data *Resource              `json:"data,omitempty"`
	Meta map[string]interface{} `json:"meta,omitempty"`
}
