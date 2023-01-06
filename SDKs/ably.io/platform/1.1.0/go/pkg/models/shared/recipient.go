package shared

type RecipientTransportTypeEnum string

const (
	RecipientTransportTypeEnumApns RecipientTransportTypeEnum = "apns"
	RecipientTransportTypeEnumFcm  RecipientTransportTypeEnum = "fcm"
	RecipientTransportTypeEnumGcm  RecipientTransportTypeEnum = "gcm"
)

// RecipientOutput
// Push recipient details for a device.
type RecipientOutput struct {
	DeviceToken       *string                     `json:"deviceToken,omitempty"`
	RegistrationToken *string                     `json:"registrationToken,omitempty"`
	TransportType     *RecipientTransportTypeEnum `json:"transportType,omitempty"`
}

// Recipient
// Push recipient details for a device.
type Recipient struct {
	ClientID          *string                     `json:"clientId,omitempty" form:"name=clientId"`
	DeviceID          *string                     `json:"deviceId,omitempty" form:"name=deviceId"`
	DeviceToken       *string                     `json:"deviceToken,omitempty" form:"name=deviceToken"`
	RegistrationToken *string                     `json:"registrationToken,omitempty" form:"name=registrationToken"`
	TransportType     *RecipientTransportTypeEnum `json:"transportType,omitempty" form:"name=transportType"`
}
