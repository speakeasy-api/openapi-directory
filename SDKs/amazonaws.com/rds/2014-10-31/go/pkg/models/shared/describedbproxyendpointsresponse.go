package shared

type DescribeDbProxyEndpointsResponse struct {
	DBProxyEndpoints []DbProxyEndpoint
	Marker           *string
}
