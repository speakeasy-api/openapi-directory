// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type UpdateHubRequest struct {
	HubDescription    *string  `json:"HubDescription,omitempty"`
	HubDisplayName    *string  `json:"HubDisplayName,omitempty"`
	HubName           string   `json:"HubName"`
	HubSearchKeywords []string `json:"HubSearchKeywords,omitempty"`
}
