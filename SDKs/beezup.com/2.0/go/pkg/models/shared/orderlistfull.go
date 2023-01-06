package shared

// OrderListFull
// The order list with all information we have from the orders and its items.\
// The paginationResult properties can be null if the list is empty.
type OrderListFull struct {
	Links            OrderListFullLinks            `json:"links"`
	Orders           []Order                       `json:"orders"`
	PaginationResult *BeezUpCommonPaginationResult `json:"paginationResult,omitempty"`
}
