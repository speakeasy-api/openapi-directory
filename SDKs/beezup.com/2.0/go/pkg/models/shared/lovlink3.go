package shared

// LovLink3
// Describe the way you have to follow to get access to the LOV
type LovLink3 struct {
	Href   string          `json:"href"`
	Method *HTTPMethodEnum `json:"method,omitempty"`
}
