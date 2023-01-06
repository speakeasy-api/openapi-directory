package shared

type RegisterStreamConsumerInput struct {
	ConsumerName string `json:"ConsumerName"`
	StreamARN    string `json:"StreamARN"`
}
