// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ChangeOrderListRequestItem - Contains the order identifier and the change order request
type ChangeOrderListRequestItem struct {
	// All properties with the prefix order_ are translated in the list of values /user/lov#OrderMetaInfoPosted
	ChangeOrderRequest map[string]string       `json:"changeOrderRequest,omitempty"`
	Order              OrderIdentifierWithETag `json:"order"`
}
