package shared

import (
	"time"
)

// SubscriptionIndex
// The subscription definition
type SubscriptionIndex struct {
	ConsumerHealthStatus                           *ConsumptionAvailabilityStatusEnum `json:"consumerHealthStatus,omitempty"`
	ConsumerLastRequestSentURI                     *string                            `json:"consumerLastRequestSentUri,omitempty"`
	ConsumerUnvailableSinceUtcDate                 *time.Time                         `json:"consumerUnvailableSinceUtcDate,omitempty"`
	ID                                             string                             `json:"id"`
	LastErrorMessage                               *ErrorResponseMessage              `json:"lastErrorMessage,omitempty"`
	LastOrderPushedModificationUtcDate             *time.Time                         `json:"lastOrderPushedModificationUtcDate,omitempty"`
	LastRetryUtcDate                               *time.Time                         `json:"lastRetryUtcDate,omitempty"`
	LastSuccessfulOrderPushedUtcDate               *time.Time                         `json:"lastSuccessfulOrderPushedUtcDate,omitempty"`
	Links                                          *SubscriptionLinks                 `json:"links,omitempty"`
	MaxRetryCount                                  *int64                             `json:"maxRetryCount,omitempty"`
	MerchantApplicationName                        string                             `json:"merchantApplicationName"`
	MerchantApplicationVersion                     string                             `json:"merchantApplicationVersion"`
	MerchantEmailAlert                             *string                            `json:"merchantEmailAlert,omitempty"`
	Name                                           string                             `json:"name"`
	NextScheduledRetryUtcDate                      *time.Time                         `json:"nextScheduledRetryUtcDate,omitempty"`
	RecoverBeginPeriodOrderLastModificationUtcDate *time.Time                         `json:"recoverBeginPeriodOrderLastModificationUtcDate,omitempty"`
	RecoverEndPeriodOrderLastModificationUtcDate   *time.Time                         `json:"recoverEndPeriodOrderLastModificationUtcDate,omitempty"`
	RetryCount                                     *int64                             `json:"retryCount,omitempty"`
	Status                                         SubscriptionStatusEnum             `json:"status"`
	TargetURL                                      string                             `json:"targetUrl"`
}
