package shared

// DirectMessageConfiguration
// Specifies the settings and content for the default message and any default messages that you tailored for specific channels.
type DirectMessageConfiguration struct {
	ADMMessage                     *AdmMessage                     `json:"ADMMessage,omitempty"`
	APNSMessage                    *ApnsMessage                    `json:"APNSMessage,omitempty"`
	BaiduMessage                   *BaiduMessage                   `json:"BaiduMessage,omitempty"`
	DefaultMessage                 *DefaultMessage                 `json:"DefaultMessage,omitempty"`
	DefaultPushNotificationMessage *DefaultPushNotificationMessage `json:"DefaultPushNotificationMessage,omitempty"`
	EmailMessage                   *EmailMessage                   `json:"EmailMessage,omitempty"`
	GCMMessage                     *GcmMessage                     `json:"GCMMessage,omitempty"`
	SMSMessage                     *SmsMessage                     `json:"SMSMessage,omitempty"`
	VoiceMessage                   *VoiceMessage                   `json:"VoiceMessage,omitempty"`
}
