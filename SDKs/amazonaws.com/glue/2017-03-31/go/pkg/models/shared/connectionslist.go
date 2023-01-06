package shared

// ConnectionsList
// Specifies the connections used by a job.
type ConnectionsList struct {
	Connections map[string]interface{} `json:"Connections,omitempty"`
}
