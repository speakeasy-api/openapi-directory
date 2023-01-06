package shared

type EventsBatch struct {
	Endpoint *PublicEndpoint  `json:"Endpoint,omitempty"`
	Events   map[string]Event `json:"Events,omitempty"`
}
