package webhooks

type PostBeneficiarySetupRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostBeneficiarySetupResponse struct {
	ContentType          string
	NotificationResponse *interface{}
	StatusCode           int64
}
