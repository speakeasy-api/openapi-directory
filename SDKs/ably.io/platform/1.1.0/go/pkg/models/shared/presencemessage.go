package shared

type PresenceMessageActionEnum string

const (
	PresenceMessageActionEnumAbsent  PresenceMessageActionEnum = "ABSENT"
	PresenceMessageActionEnumPresent PresenceMessageActionEnum = "PRESENT"
	PresenceMessageActionEnumEnter   PresenceMessageActionEnum = "ENTER"
	PresenceMessageActionEnumLeave   PresenceMessageActionEnum = "LEAVE"
	PresenceMessageActionEnumUpdate  PresenceMessageActionEnum = "UPDATE"
)

type PresenceMessage struct {
	Action       *PresenceMessageActionEnum `json:"action,omitempty"`
	ClientID     *string                    `json:"clientId,omitempty"`
	ConnectionID *string                    `json:"connectionId,omitempty"`
	Data         *string                    `json:"data,omitempty"`
	Encoding     *string                    `json:"encoding,omitempty"`
	Extras       *Extras                    `json:"extras,omitempty"`
	ID           *string                    `json:"id,omitempty"`
	Timestamp    *int64                     `json:"timestamp,omitempty"`
}
