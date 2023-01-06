package shared

// OrderListLight
// The order list with minimum information we have from the orders.\
// The paginationResult properties can be null if the list is empty.
type OrderListLight struct {
	Links            OrderListLightLinks           `json:"links"`
	Orders           []OrderHeader                 `json:"orders"`
	PaginationResult *BeezUpCommonPaginationResult `json:"paginationResult,omitempty"`
}
