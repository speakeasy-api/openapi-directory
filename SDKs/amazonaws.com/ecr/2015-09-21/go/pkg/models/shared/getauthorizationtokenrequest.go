package shared

type GetAuthorizationTokenRequest struct {
	RegistryIds map[string]interface{} `json:"registryIds,omitempty"`
}
