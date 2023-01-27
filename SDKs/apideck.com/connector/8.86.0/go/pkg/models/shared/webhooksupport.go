package shared

type WebhookSupportManagedViaEnum string

const (
	WebhookSupportManagedViaEnumManual WebhookSupportManagedViaEnum = "manual"
	WebhookSupportManagedViaEnumAPI    WebhookSupportManagedViaEnum = "api"
)

type WebhookSupportModeEnum string

const (
	WebhookSupportModeEnumNative  WebhookSupportModeEnum = "native"
	WebhookSupportModeEnumVirtual WebhookSupportModeEnum = "virtual"
	WebhookSupportModeEnumNone    WebhookSupportModeEnum = "none"
)

type WebhookSupportSubscriptionLevelEnum string

const (
	WebhookSupportSubscriptionLevelEnumConnection  WebhookSupportSubscriptionLevelEnum = "connection"
	WebhookSupportSubscriptionLevelEnumIntegration WebhookSupportSubscriptionLevelEnum = "integration"
)

type WebhookSupportVirtualWebhooksRequestRateUnitEnum string

const (
	WebhookSupportVirtualWebhooksRequestRateUnitEnumSecond WebhookSupportVirtualWebhooksRequestRateUnitEnum = "second"
	WebhookSupportVirtualWebhooksRequestRateUnitEnumMinute WebhookSupportVirtualWebhooksRequestRateUnitEnum = "minute"
	WebhookSupportVirtualWebhooksRequestRateUnitEnumHour   WebhookSupportVirtualWebhooksRequestRateUnitEnum = "hour"
	WebhookSupportVirtualWebhooksRequestRateUnitEnumDay    WebhookSupportVirtualWebhooksRequestRateUnitEnum = "day"
)

// WebhookSupportVirtualWebhooksRequestRate
// The rate at which requests for resources will be made to downstream.
type WebhookSupportVirtualWebhooksRequestRate struct {
	Rate int64                                            `json:"rate"`
	Size int64                                            `json:"size"`
	Unit WebhookSupportVirtualWebhooksRequestRateUnitEnum `json:"unit"`
}

// WebhookSupportVirtualWebhooks
// Virtual webhook config for the connector.
type WebhookSupportVirtualWebhooks struct {
	RequestRate WebhookSupportVirtualWebhooksRequestRate `json:"request_rate"`
	Resources   map[string]interface{}                   `json:"resources,omitempty"`
}

// WebhookSupport
// How webhooks are supported for the connector. Sometimes the connector natively supports webhooks, other times Apideck virtualizes them based on polling.
type WebhookSupport struct {
	ManagedVia        *WebhookSupportManagedViaEnum        `json:"managed_via,omitempty"`
	Mode              *WebhookSupportModeEnum              `json:"mode,omitempty"`
	SubscriptionLevel *WebhookSupportSubscriptionLevelEnum `json:"subscription_level,omitempty"`
	VirtualWebhooks   *WebhookSupportVirtualWebhooks       `json:"virtual_webhooks,omitempty"`
}
