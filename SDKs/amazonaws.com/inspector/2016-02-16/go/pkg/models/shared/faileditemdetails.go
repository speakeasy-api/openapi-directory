package shared

type FailedItemDetails struct {
	FailureCode *FailedItemErrorCodeEnum `json:"failureCode,omitempty"`
	Retryable   *bool                    `json:"retryable,omitempty"`
}
