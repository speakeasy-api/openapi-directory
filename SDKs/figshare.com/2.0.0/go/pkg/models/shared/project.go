package shared

type Project struct {
	ID            *int64  `json:"id,omitempty"`
	PublishedDate *string `json:"published_date,omitempty"`
	Title         *string `json:"title,omitempty"`
	URL           *string `json:"url,omitempty"`
}
