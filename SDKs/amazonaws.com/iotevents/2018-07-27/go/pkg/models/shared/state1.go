package shared

// State1
// Information that defines a state of a detector.
type State1 struct {
	OnEnter   *OnEnterLifecycle `json:"onEnter,omitempty"`
	OnExit    *OnExitLifecycle1 `json:"onExit,omitempty"`
	OnInput   *OnInputLifecycle `json:"onInput,omitempty"`
	StateName string            `json:"stateName"`
}
