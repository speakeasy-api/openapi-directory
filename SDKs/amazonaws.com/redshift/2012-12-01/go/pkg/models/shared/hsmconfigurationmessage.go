package shared

// HsmConfigurationMessage
// <p/>
type HsmConfigurationMessage struct {
	HsmConfigurations []map[string]interface{}
	Marker            *string
}
