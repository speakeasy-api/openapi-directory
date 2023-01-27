package shared

type UpdateConsumerRequest struct {
	Metadata *ConsumerMetadata `json:"metadata,omitempty"`
}
