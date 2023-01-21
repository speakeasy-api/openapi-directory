package webhooks

type PostPaymentFailureRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostPaymentFailureResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
