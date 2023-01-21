package webhooks

type PostAccountClosedRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostAccountClosedResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
