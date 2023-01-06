package shared

type ConfigureAutomaticTransitionRequest struct {
	AutomaticTransitions []AutomaticTransition `json:"automaticTransitions"`
}
