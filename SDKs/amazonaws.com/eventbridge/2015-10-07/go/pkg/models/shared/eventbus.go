// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// EventBus - An event bus receives events from a source, uses rules to evaluate them, applies any configured input transformation, and routes them to the appropriate target(s). Your account's default event bus receives events from Amazon Web Services services. A custom event bus can receive events from your custom applications and services. A partner event bus receives events from an event source created by an SaaS partner. These events come from the partners services or applications.
type EventBus struct {
	Arn    *string `json:"Arn,omitempty"`
	Name   *string `json:"Name,omitempty"`
	Policy *string `json:"Policy,omitempty"`
}
