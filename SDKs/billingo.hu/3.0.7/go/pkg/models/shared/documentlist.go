package shared

// DocumentList
// A object with a data property that contains an array of up to limit documents. Each entry in the array is a separate document object. If no more documents are available, the resulting array will be empty.
type DocumentList struct {
	CurrentPage *int64     `json:"current_page,omitempty"`
	Data        []Document `json:"data,omitempty"`
	LastPage    *int64     `json:"last_page,omitempty"`
	NextPageURL *string    `json:"next_page_url,omitempty"`
	PerPage     *int64     `json:"per_page,omitempty"`
	PrevPageURL *string    `json:"prev_page_url,omitempty"`
	Total       *int64     `json:"total,omitempty"`
}
