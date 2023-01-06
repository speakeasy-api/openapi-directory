package shared

// ExportOrderListRequest
// The message request to export order list. The store identifier is requested to regroup the exportations.
type ExportOrderListRequest struct {
	Format                            *ExportOrderListFormatEnum        `json:"format,omitempty"`
	OrderListRequestWithoutPagination OrderListRequestWithoutPagination `json:"orderListRequestWithoutPagination"`
	StoreID                           string                            `json:"storeId"`
}
