package shared

type GetNotificationChannelResponse struct {
	SnsRoleName *string                `json:"SnsRoleName,omitempty"`
	SnsTopicArn map[string]interface{} `json:"SnsTopicArn,omitempty"`
}
