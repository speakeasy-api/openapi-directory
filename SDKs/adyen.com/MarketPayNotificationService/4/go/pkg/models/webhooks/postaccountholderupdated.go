package webhooks

type PostAccountHolderUpdatedRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostAccountHolderUpdatedResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
