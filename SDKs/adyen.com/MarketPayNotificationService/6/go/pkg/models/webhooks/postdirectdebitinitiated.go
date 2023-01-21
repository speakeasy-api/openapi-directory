package webhooks

type PostDirectDebitInitiatedRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostDirectDebitInitiatedResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
