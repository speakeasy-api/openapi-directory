package webhooks

type PostAccountHolderCreatedRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostAccountHolderCreatedResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
