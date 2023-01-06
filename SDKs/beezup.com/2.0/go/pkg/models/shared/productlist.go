package shared

type ProductList struct {
	PaginationResult BeezUpCommonPaginationResult `json:"paginationResult"`
	Products         []interface{}                `json:"products"`
}
