package webhooks

type PostRefundFundsTransferRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostRefundFundsTransferResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
