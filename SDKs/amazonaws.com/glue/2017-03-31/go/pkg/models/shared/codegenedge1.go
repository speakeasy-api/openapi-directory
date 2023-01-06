package shared

// CodeGenEdge1
// Represents a directional edge in a directed acyclic graph (DAG).
type CodeGenEdge1 struct {
	Source          string  `json:"Source"`
	Target          string  `json:"Target"`
	TargetParameter *string `json:"TargetParameter,omitempty"`
}
