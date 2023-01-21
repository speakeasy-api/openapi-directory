package webhooks

type PostAccountHolderStatusChangeRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostAccountHolderStatusChangeResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
