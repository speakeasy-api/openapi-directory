package shared

// OrderWithLinks
// Describe in details all informations related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails.
type OrderWithLinks struct {
	Links           OrderLinks               `json:"links"`
	TransitionLinks []map[string]interface{} `json:"transitionLinks"`
}
