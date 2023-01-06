package shared

// DiscoveredResource1
// Object representing the on-premises resource being migrated.
type DiscoveredResource1 struct {
	ConfigurationID string  `json:"ConfigurationId"`
	Description     *string `json:"Description,omitempty"`
}
