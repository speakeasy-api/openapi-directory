package webhooks

type PostCompensateNegativeBalanceRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostCompensateNegativeBalanceResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
