package shared

type UpdateApplicationMaintenanceConfigurationResponse struct {
	ApplicationARN                                 *string                                         `json:"ApplicationARN,omitempty"`
	ApplicationMaintenanceConfigurationDescription *ApplicationMaintenanceConfigurationDescription `json:"ApplicationMaintenanceConfigurationDescription,omitempty"`
}
