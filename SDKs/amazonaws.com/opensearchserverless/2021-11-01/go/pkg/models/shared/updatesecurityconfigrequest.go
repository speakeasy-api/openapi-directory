// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type UpdateSecurityConfigRequest struct {
	ClientToken   *string            `json:"clientToken,omitempty"`
	ConfigVersion string             `json:"configVersion"`
	Description   *string            `json:"description,omitempty"`
	ID            string             `json:"id"`
	SamlOptions   *SamlConfigOptions `json:"samlOptions,omitempty"`
}
