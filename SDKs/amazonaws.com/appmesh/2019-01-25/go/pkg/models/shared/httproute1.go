package shared

// HTTPRoute1
// An object that represents an HTTP or HTTP/2 route type.
type HTTPRoute1 struct {
	Action      HTTPRouteAction   `json:"action"`
	Match       HTTPRouteMatch    `json:"match"`
	RetryPolicy *HTTPRetryPolicy1 `json:"retryPolicy,omitempty"`
	Timeout     *HTTPTimeout      `json:"timeout,omitempty"`
}
