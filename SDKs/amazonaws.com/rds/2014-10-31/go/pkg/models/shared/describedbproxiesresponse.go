package shared

type DescribeDbProxiesResponse struct {
	DBProxies []DbProxy
	Marker    *string
}
