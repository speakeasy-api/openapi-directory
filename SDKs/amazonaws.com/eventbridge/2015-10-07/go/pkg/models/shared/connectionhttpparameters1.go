package shared

// ConnectionHTTPParameters1
// Contains additional parameters for the connection.
type ConnectionHTTPParameters1 struct {
	BodyParameters        []ConnectionBodyParameter        `json:"BodyParameters,omitempty"`
	HeaderParameters      map[string]interface{}           `json:"HeaderParameters,omitempty"`
	QueryStringParameters []ConnectionQueryStringParameter `json:"QueryStringParameters,omitempty"`
}
