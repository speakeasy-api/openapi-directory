package shared

type OrderListFullWithLinks struct {
	Links            OrderListFullLinks `json:"links"`
	Orders           []OrderWithLinks   `json:"orders"`
	PaginationResult PaginationResult   `json:"paginationResult"`
}
