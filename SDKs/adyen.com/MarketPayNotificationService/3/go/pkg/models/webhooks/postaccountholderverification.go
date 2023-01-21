package webhooks

type PostAccountHolderVerificationRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostAccountHolderVerificationResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
