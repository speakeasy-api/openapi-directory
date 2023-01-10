package shared

type Timeline struct {
	FirstOnline          *string `json:"firstOnline,omitempty"`
	Posted               *string `json:"posted,omitempty"`
	PublisherAcceptance  *string `json:"publisherAcceptance,omitempty"`
	PublisherPublication *string `json:"publisherPublication,omitempty"`
	Revision             *string `json:"revision,omitempty"`
	Submission           *string `json:"submission,omitempty"`
}
