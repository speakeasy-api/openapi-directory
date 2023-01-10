package shared

// HsmConfigurationMessage
// <p/>
type HsmConfigurationMessage struct {
	HsmConfigurations []HsmConfigurationList
	Marker            *string
}
