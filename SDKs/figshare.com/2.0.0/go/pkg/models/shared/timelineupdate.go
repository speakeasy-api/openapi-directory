package shared

type TimelineUpdate struct {
	FirstOnline          *string `json:"firstOnline,omitempty"`
	PublisherAcceptance  *string `json:"publisherAcceptance,omitempty"`
	PublisherPublication *string `json:"publisherPublication,omitempty"`
}
