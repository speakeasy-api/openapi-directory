package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiersEligibilityReasonsEnum string

const (
	GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiersEligibilityReasonsEnumOverRepositoryLimit GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiersEligibilityReasonsEnum = "OverRepositoryLimit"
	GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiersEligibilityReasonsEnumOverStorageLimit    GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiersEligibilityReasonsEnum = "OverStorageLimit"
)

type GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiers struct {
	EligibilityReasons []GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiersEligibilityReasonsEnum `json:"eligibility_reasons,omitempty"`
	Eligible           *bool                                                                                `json:"eligible,omitempty"`
}

type GetRegistryOptions200ApplicationJSONOptions struct {
	SubscriptionTiers []GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiers `json:"subscription_tiers,omitempty"`
}

type GetRegistryOptions200ApplicationJSON struct {
	Options *GetRegistryOptions200ApplicationJSONOptions `json:"options,omitempty"`
}

type GetRegistryOptions401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetRegistryOptionsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetRegistryOptions200ApplicationJSONObject                *GetRegistryOptions200ApplicationJSON
	GetRegistryOptions401ApplicationJSONObject                *GetRegistryOptions401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
