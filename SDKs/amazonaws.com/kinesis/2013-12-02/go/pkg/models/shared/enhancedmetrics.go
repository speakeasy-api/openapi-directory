package shared

// EnhancedMetrics
// Represents enhanced metrics types.
type EnhancedMetrics struct {
	ShardLevelMetrics map[string]interface{} `json:"ShardLevelMetrics,omitempty"`
}
