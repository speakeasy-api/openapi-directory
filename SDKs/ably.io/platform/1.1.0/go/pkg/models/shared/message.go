package shared

// Message
// Message object.
type Message struct {
	ClientID     *string `json:"clientId,omitempty"`
	ConnectionID *string `json:"connectionId,omitempty"`
	Data         *string `json:"data,omitempty"`
	Encoding     *string `json:"encoding,omitempty"`
	Extras       *Extras `json:"extras,omitempty"`
	ID           *string `json:"id,omitempty"`
	Name         *string `json:"name,omitempty"`
	Timestamp    *int64  `json:"timestamp,omitempty"`
}

// MessageInput
// Message object.
type MessageInput struct {
	ClientID     *string `json:"clientId,omitempty" form:"name=clientId"`
	ConnectionID *string `json:"connectionId,omitempty" form:"name=connectionId"`
	Data         *string `json:"data,omitempty" form:"name=data"`
	Encoding     *string `json:"encoding,omitempty" form:"name=encoding"`
	Extras       *Extras `json:"extras,omitempty" form:"name=extras"`
	Name         *string `json:"name,omitempty" form:"name=name"`
}
