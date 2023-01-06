package shared

// RouteSpec1
// An object that represents a route specification. Specify one route type.
type RouteSpec1 struct {
	GrpcRoute  *GrpcRoute `json:"grpcRoute,omitempty"`
	Http2Route *HTTPRoute `json:"http2Route,omitempty"`
	HTTPRoute  *HTTPRoute `json:"httpRoute,omitempty"`
	Priority   *int64     `json:"priority,omitempty"`
	TCPRoute   *TCPRoute  `json:"tcpRoute,omitempty"`
}
