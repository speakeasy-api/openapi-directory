package shared

// RealtimeLogConfig
// A real-time log configuration.
type RealtimeLogConfig struct {
	ARN          string
	EndPoints    []EndPoint
	Fields       []map[string]interface{}
	Name         string
	SamplingRate int64
}
