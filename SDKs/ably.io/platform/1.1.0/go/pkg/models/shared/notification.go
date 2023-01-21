package shared

type Notification struct {
	Body        *string `json:"body,omitempty"`
	CollapseKey *string `json:"collapseKey,omitempty"`
	Icon        *string `json:"icon,omitempty"`
	Sound       *string `json:"sound,omitempty"`
	Title       *string `json:"title,omitempty"`
}
