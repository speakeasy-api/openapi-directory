package webhooks

type PostTransferFundsRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostTransferFundsResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
