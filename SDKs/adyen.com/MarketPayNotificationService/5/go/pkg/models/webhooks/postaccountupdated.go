package webhooks

type PostAccountUpdatedRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostAccountUpdatedResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
