package shared

// ChangeOrderListRequestItemV2
// Contains the order identifier and the change order request
type ChangeOrderListRequestItemV2 struct {
	ChangeOrderRequest map[string]string `json:"changeOrderRequest,omitempty"`
	Order              OrderIdentifier   `json:"order"`
}
