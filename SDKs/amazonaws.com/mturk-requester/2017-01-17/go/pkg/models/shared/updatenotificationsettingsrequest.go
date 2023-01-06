package shared

type UpdateNotificationSettingsRequest struct {
	Active       *bool                      `json:"Active,omitempty"`
	HITTypeID    string                     `json:"HITTypeId"`
	Notification *NotificationSpecification `json:"Notification,omitempty"`
}
