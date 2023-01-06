package shared

// DescribeEndpointsResponse
// <p/>
type DescribeEndpointsResponse struct {
	Endpoints []Endpoint1 `json:"Endpoints,omitempty"`
	Marker    *string     `json:"Marker,omitempty"`
}
