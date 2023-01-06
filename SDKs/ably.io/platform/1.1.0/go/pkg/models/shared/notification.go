package shared

type Notification struct {
	Body        *string `json:"body,omitempty" form:"name=body"`
	CollapseKey *string `json:"collapseKey,omitempty" form:"name=collapseKey"`
	Icon        *string `json:"icon,omitempty" form:"name=icon"`
	Sound       *string `json:"sound,omitempty" form:"name=sound"`
	Title       *string `json:"title,omitempty" form:"name=title"`
}
