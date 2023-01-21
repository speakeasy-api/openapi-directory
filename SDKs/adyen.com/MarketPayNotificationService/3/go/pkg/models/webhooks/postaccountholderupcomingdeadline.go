package webhooks

type PostAccountHolderUpcomingDeadlineRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostAccountHolderUpcomingDeadlineResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
