package shared

// ChangeOrderListRequest
// Contains all change order operations you want to make.  (max 100 items per call)
type ChangeOrderListRequest struct {
	ChangeOrders []ChangeOrderListRequestItem `json:"changeOrders"`
}
