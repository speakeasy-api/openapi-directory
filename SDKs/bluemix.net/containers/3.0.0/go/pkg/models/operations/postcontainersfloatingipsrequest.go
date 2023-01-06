package operations

type PostContainersFloatingIpsRequestHeaders struct {
	XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
	XAuthToken     string `header:"style=simple,explode=false,name=X-Auth-Token"`
}

type PostContainersFloatingIpsRequestRequest struct {
	Headers PostContainersFloatingIpsRequestHeaders
}

type PostContainersFloatingIpsRequestResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	PostContainersFloatingIpsRequest200ApplicationJSONString *string
}
