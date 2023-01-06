package shared

type EndpointMessageResult struct {
	Address        *string             `json:"Address,omitempty"`
	DeliveryStatus *DeliveryStatusEnum `json:"DeliveryStatus,omitempty"`
	MessageID      *string             `json:"MessageId,omitempty"`
	StatusCode     *int64              `json:"StatusCode,omitempty"`
	StatusMessage  *string             `json:"StatusMessage,omitempty"`
	UpdatedToken   *string             `json:"UpdatedToken,omitempty"`
}
