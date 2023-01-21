package shared

type UpdateIndexRequest struct {
	CapacityUnits                        *CapacityUnitsConfiguration     `json:"CapacityUnits,omitempty"`
	Description                          *string                         `json:"Description,omitempty"`
	DocumentMetadataConfigurationUpdates []DocumentMetadataConfiguration `json:"DocumentMetadataConfigurationUpdates,omitempty"`
	ID                                   string                          `json:"Id"`
	Name                                 *string                         `json:"Name,omitempty"`
	RoleArn                              *string                         `json:"RoleArn,omitempty"`
	UserContextPolicy                    *UserContextPolicyEnum          `json:"UserContextPolicy,omitempty"`
	UserTokenConfigurations              []UserTokenConfiguration        `json:"UserTokenConfigurations,omitempty"`
}
