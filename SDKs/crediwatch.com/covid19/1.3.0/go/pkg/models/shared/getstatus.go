package shared

type GetStatus struct {
	AnsweredBy           *string `json:"answered_by,omitempty"`
	Error                *string `json:"error,omitempty"`
	OptionSelected       *string `json:"option_selected,omitempty"`
	PhoneNumber          *string `json:"phone_number,omitempty"`
	PreviouslyVerifiedAt *string `json:"previously_verified_at,omitempty"`
	Progress             *string `json:"progress,omitempty"`
	Token                *string `json:"token,omitempty"`
}
