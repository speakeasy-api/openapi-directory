package shared

// ChangeOrderListRequestItem
// Contains the order identifier and the change order request
type ChangeOrderListRequestItem struct {
	ChangeOrderRequest map[string]string       `json:"changeOrderRequest,omitempty"`
	Order              OrderIdentifierWithETag `json:"order"`
}
