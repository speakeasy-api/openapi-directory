// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type UpdateMerchantAPICredentialRequest struct {
	// Indicates if the API credential is enabled.
	Active *bool `json:"active,omitempty"`
	// The new list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential.
	AllowedOrigins []string `json:"allowedOrigins,omitempty"`
	// Description of the API credential.
	Description *string `json:"description,omitempty"`
	// List of [roles](https://docs.adyen.com/development-resources/api-credentials#roles-1) for the API credential.
	Roles []string `json:"roles,omitempty"`
}
