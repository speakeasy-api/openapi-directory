package shared

// OrderHeaderWithLinks
// Describe the basic information related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails
type OrderHeaderWithLinks struct {
	Links OrderHeaderLinks `json:"links"`
}
