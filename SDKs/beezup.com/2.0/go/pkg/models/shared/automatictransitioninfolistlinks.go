package shared

type AutomaticTransitionInfoListLinks struct {
	Configure LinksConfigureAutomaticTransitionsLink `json:"configure"`
	Self      LinksGetAutomaticTransitionsLink       `json:"self"`
}
