package shared

// BeezUpCommonLovLink3
// Describe the way you have to follow to get access to the LOV
type BeezUpCommonLovLink3 struct {
	Href   string                      `json:"href"`
	Method *BeezUpCommonHTTPMethodEnum `json:"method,omitempty"`
}
