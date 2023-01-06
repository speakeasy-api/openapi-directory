package shared

// DiscoveredResource
// Object representing the on-premises resource being migrated.
type DiscoveredResource struct {
	ConfigurationID string                 `json:"ConfigurationId"`
	Description     map[string]interface{} `json:"Description,omitempty"`
}
