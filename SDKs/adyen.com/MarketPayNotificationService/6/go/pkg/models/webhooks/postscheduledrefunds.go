package webhooks

type PostScheduledRefundsRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostScheduledRefundsResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
