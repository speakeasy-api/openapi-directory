package shared

// CodeGenEdge
// Represents a directional edge in a directed acyclic graph (DAG).
type CodeGenEdge struct {
	Source          string                 `json:"Source"`
	Target          string                 `json:"Target"`
	TargetParameter map[string]interface{} `json:"TargetParameter,omitempty"`
}
