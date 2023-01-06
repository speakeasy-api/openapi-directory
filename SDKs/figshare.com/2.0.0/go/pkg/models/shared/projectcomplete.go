package shared

type ProjectComplete struct {
	ID            *int64  `json:"id,omitempty"`
	PublishedDate *string `json:"published_date,omitempty"`
	Title         *string `json:"title,omitempty"`
	URL           *string `json:"url,omitempty"`
}
