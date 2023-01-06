package shared

type DeregisterStreamConsumerInput struct {
	ConsumerARN  *string `json:"ConsumerARN,omitempty"`
	ConsumerName *string `json:"ConsumerName,omitempty"`
	StreamARN    *string `json:"StreamARN,omitempty"`
}
