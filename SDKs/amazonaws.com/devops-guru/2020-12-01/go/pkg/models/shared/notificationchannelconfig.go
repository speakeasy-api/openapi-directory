// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// NotificationChannelConfig -  Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
type NotificationChannelConfig struct {
	Filters *NotificationFilterConfig `json:"Filters,omitempty"`
	Sns     SnsChannelConfig          `json:"Sns"`
}
