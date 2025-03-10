// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// UserEmailSettings - The set of all email subscription/opt-in settings and definitions.
type UserEmailSettings struct {
	// Keyed by the name identifier of the opt-in definition.
	OptInDefinitions map[string]UserEmailOptInDefinition
	// Keyed by the name identifier of the Subscription definition.
	SubscriptionDefinitions map[string]UserEmailSubscriptionDefinition
	// Keyed by the name identifier of the View definition.
	Views map[string]UserEmailViewDefinition
}
