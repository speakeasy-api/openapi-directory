// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type WorkspaceCreate struct {
	AnonymousDataCollection *bool                `json:"anonymousDataCollection,omitempty"`
	DefaultGeography        *GeographyEnum       `json:"defaultGeography,omitempty"`
	DisplaySetupWizard      *bool                `json:"displaySetupWizard,omitempty"`
	Email                   *string              `json:"email,omitempty"`
	Name                    string               `json:"name"`
	News                    *bool                `json:"news,omitempty"`
	Notifications           []Notification       `json:"notifications,omitempty"`
	SecurityUpdates         *bool                `json:"securityUpdates,omitempty"`
	WebhookConfigs          []WebhookConfigWrite `json:"webhookConfigs,omitempty"`
}
