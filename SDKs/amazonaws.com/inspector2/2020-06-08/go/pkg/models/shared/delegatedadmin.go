// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// DelegatedAdmin - Details of the Amazon Inspector delegated administrator for your organization.
type DelegatedAdmin struct {
	AccountID          *string                 `json:"accountId,omitempty"`
	RelationshipStatus *RelationshipStatusEnum `json:"relationshipStatus,omitempty"`
}
