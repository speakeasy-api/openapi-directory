// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type DisablePermitRequest struct {
	// The merchant account identifier, with which you want to process the transaction.
	MerchantAccount string `json:"merchantAccount"`
	// The permit token to disable.
	Token string `json:"token"`
}
