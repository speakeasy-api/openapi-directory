package shared

// HealthCheck
// Information about a health check.
type HealthCheck struct {
	HealthyThreshold   map[string]interface{}
	Interval           int64
	Target             string
	Timeout            int64
	UnhealthyThreshold int64
}
