package webhooks

type PostAccountFundsBelowThresholdRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostAccountFundsBelowThresholdResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
