// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// EventType - Event type information
type EventType struct {
	// ID
	ID int `json:"id"`
	// Name
	Name string `json:"name"`
	// Usable as customer admin webhook
	UsableCustomerAdminWebhook bool `json:"usableCustomerAdminWebhook"`
	// Usable as node webhook
	UsableNodeWebhook bool `json:"usableNodeWebhook"`
	// Usable as push notification
	UsablePushNotification bool `json:"usablePushNotification"`
	// Usable as tenant webhook
	UsableTenantWebhook bool `json:"usableTenantWebhook"`
}
