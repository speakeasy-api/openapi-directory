package shared

// Logging1
// An object representing the logging configuration for resources in your cluster.
type Logging1 struct {
	ClusterLogging map[string]interface{} `json:"clusterLogging,omitempty"`
}
