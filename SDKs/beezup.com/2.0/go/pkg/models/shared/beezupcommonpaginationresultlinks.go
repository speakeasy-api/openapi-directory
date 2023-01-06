package shared

// BeezUpCommonPaginationResultLinks
// The navigation links 'first', 'last', 'next', 'previous'
type BeezUpCommonPaginationResultLinks struct {
	First    BeezUpCommonLink3  `json:"first"`
	Last     BeezUpCommonLink3  `json:"last"`
	Next     *BeezUpCommonLink3 `json:"next,omitempty"`
	Previous *BeezUpCommonLink3 `json:"previous,omitempty"`
}
