package shared

type StartCallAnalyticsJobRequest struct {
	CallAnalyticsJobName     string                    `json:"CallAnalyticsJobName"`
	ChannelDefinitions       []ChannelDefinition       `json:"ChannelDefinitions,omitempty"`
	DataAccessRoleArn        string                    `json:"DataAccessRoleArn"`
	Media                    Media                     `json:"Media"`
	OutputEncryptionKMSKeyID map[string]interface{}    `json:"OutputEncryptionKMSKeyId,omitempty"`
	OutputLocation           *string                   `json:"OutputLocation,omitempty"`
	Settings                 *CallAnalyticsJobSettings `json:"Settings,omitempty"`
}
