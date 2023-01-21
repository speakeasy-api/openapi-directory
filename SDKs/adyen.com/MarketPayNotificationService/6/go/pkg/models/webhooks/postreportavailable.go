package webhooks

type PostReportAvailableRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostReportAvailableResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
