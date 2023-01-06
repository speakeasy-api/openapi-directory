package shared

type MessageResult struct {
	DeliveryStatus *DeliveryStatusEnum `json:"DeliveryStatus,omitempty"`
	MessageID      *string             `json:"MessageId,omitempty"`
	StatusCode     *int64              `json:"StatusCode,omitempty"`
	StatusMessage  *string             `json:"StatusMessage,omitempty"`
	UpdatedToken   *string             `json:"UpdatedToken,omitempty"`
}
