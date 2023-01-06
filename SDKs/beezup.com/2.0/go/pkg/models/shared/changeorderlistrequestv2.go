package shared

// ChangeOrderListRequestV2
// Contains all change order operations you want to make.  (max 100 items per call)
type ChangeOrderListRequestV2 struct {
	ChangeOrders []ChangeOrderListRequestItemV2 `json:"changeOrders"`
}
