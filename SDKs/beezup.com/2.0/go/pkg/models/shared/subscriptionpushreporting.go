package shared

import (
	"time"
)

// SubscriptionPushReporting
// The subscription push reporting
type SubscriptionPushReporting struct {
	Duration                     string                `json:"duration"`
	ErrorMessage                 *ErrorResponseMessage `json:"errorMessage,omitempty"`
	EventID                      string                `json:"eventId"`
	HTTPStatus                   *int32                `json:"httpStatus,omitempty"`
	LastOrderModificationUtcDate time.Time             `json:"lastOrderModificationUtcDate"`
	MaxRetryCount                *int64                `json:"maxRetryCount,omitempty"`
	NextScheduledRetryUtcDate    *time.Time            `json:"nextScheduledRetryUtcDate,omitempty"`
	OrderCount                   int32                 `json:"orderCount"`
	RequestURI                   *string               `json:"requestUri,omitempty"`
	ResponseURI                  *string               `json:"responseUri,omitempty"`
	RetryCount                   *int64                `json:"retryCount,omitempty"`
	SubscriptionID               string                `json:"subscriptionId"`
	Succeed                      bool                  `json:"succeed"`
}
