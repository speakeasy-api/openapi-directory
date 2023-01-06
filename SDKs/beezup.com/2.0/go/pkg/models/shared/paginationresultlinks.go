package shared

// PaginationResultLinks
// The navigation links 'first', 'last', 'next', 'previous'
type PaginationResultLinks struct {
	First    Link3  `json:"first"`
	Last     Link3  `json:"last"`
	Next     *Link3 `json:"next,omitempty"`
	Previous *Link3 `json:"previous,omitempty"`
}
