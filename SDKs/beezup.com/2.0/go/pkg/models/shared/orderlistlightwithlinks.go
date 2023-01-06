package shared

type OrderListLightWithLinks struct {
	Links            OrderListLightLinks    `json:"links"`
	Orders           []OrderHeaderWithLinks `json:"orders"`
	PaginationResult PaginationResult       `json:"paginationResult"`
}
