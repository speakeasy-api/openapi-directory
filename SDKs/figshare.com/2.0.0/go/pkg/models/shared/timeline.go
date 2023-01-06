package shared

type Timeline struct {
	FirstOnline          *string `json:"firstOnline,omitempty"`
	PublisherAcceptance  *string `json:"publisherAcceptance,omitempty"`
	PublisherPublication *string `json:"publisherPublication,omitempty"`
}
