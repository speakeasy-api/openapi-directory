package shared

// NotificationResponse
// Response object for notifications.
type NotificationResponse struct {
	Data           *Notification `json:"data,omitempty"`
	Included       []interface{} `json:"included,omitempty"`
	ResponseStatus *int64        `json:"responseStatus,omitempty"`
}
