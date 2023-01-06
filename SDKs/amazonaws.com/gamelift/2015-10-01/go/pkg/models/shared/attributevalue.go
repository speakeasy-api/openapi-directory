package shared

type AttributeValue struct {
	N   *float64           `json:"N,omitempty"`
	S   *string            `json:"S,omitempty"`
	SDM map[string]float64 `json:"SDM,omitempty"`
	SL  []string           `json:"SL,omitempty"`
}
