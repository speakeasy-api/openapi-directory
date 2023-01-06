package shared

type PutAppReplicationConfigurationRequest struct {
	AppID                                *string                                `json:"appId,omitempty"`
	ServerGroupReplicationConfigurations []ServerGroupReplicationConfiguration1 `json:"serverGroupReplicationConfigurations,omitempty"`
}
