// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type DeleteNetworkACLEntryRequest struct {
	DryRun       *bool
	Egress       bool
	NetworkACLID string
	RuleNumber   int64
}
