package shared

// OrderWithLinks1
// Describe in details all informations related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails.
type OrderWithLinks1 struct {
	Links           OrderLinks             `json:"links"`
	TransitionLinks []LinksChangeOrderLink `json:"transitionLinks"`
}
