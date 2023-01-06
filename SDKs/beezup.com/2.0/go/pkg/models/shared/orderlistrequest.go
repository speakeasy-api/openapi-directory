package shared

type OrderListRequest struct {
	PageNumber int32 `json:"pageNumber"`
	PageSize   int32 `json:"pageSize"`
}
