package shared

type Collection struct {
	Doi           *string   `json:"doi,omitempty"`
	Handle        *string   `json:"handle,omitempty"`
	ID            *int64    `json:"id,omitempty"`
	PublishedDate *string   `json:"published_date,omitempty"`
	Timeline      *Timeline `json:"timeline,omitempty"`
	Title         *string   `json:"title,omitempty"`
	URL           *string   `json:"url,omitempty"`
}
