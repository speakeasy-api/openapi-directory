package webhooks

type PostAccountHolderPayoutRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostAccountHolderPayoutResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
