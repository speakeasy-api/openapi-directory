package webhooks

type PostAccountCreatedRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostAccountCreatedResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
