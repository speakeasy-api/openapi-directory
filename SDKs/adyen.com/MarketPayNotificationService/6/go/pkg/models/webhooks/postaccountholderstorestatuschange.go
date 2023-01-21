package webhooks

type PostAccountHolderStoreStatusChangeRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostAccountHolderStoreStatusChangeResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
