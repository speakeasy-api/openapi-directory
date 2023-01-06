package shared

type DeviceDetailsFormFactorEnum string

const (
	DeviceDetailsFormFactorEnumPhone    DeviceDetailsFormFactorEnum = "phone"
	DeviceDetailsFormFactorEnumTablet   DeviceDetailsFormFactorEnum = "tablet"
	DeviceDetailsFormFactorEnumDesktop  DeviceDetailsFormFactorEnum = "desktop"
	DeviceDetailsFormFactorEnumTv       DeviceDetailsFormFactorEnum = "tv"
	DeviceDetailsFormFactorEnumWatch    DeviceDetailsFormFactorEnum = "watch"
	DeviceDetailsFormFactorEnumCar      DeviceDetailsFormFactorEnum = "car"
	DeviceDetailsFormFactorEnumEmbedded DeviceDetailsFormFactorEnum = "embedded"
)

type DeviceDetailsPlatformEnum string

const (
	DeviceDetailsPlatformEnumIos     DeviceDetailsPlatformEnum = "ios"
	DeviceDetailsPlatformEnumAndroid DeviceDetailsPlatformEnum = "android"
)

type DeviceDetailsPushStateEnum string

const (
	DeviceDetailsPushStateEnumActive  DeviceDetailsPushStateEnum = "Active"
	DeviceDetailsPushStateEnumFailing DeviceDetailsPushStateEnum = "Failing"
	DeviceDetailsPushStateEnumFailed  DeviceDetailsPushStateEnum = "Failed"
)

type DeviceDetailsOutput struct {
	ClientID      *string                      `json:"clientId,omitempty"`
	DeviceSecret  *string                      `json:"deviceSecret,omitempty"`
	FormFactor    *DeviceDetailsFormFactorEnum `json:"formFactor,omitempty"`
	ID            *string                      `json:"id,omitempty"`
	Metadata      map[string]interface{}       `json:"metadata,omitempty"`
	Platform      *DeviceDetailsPlatformEnum   `json:"platform,omitempty"`
	PushRecipient *RecipientOutput             `json:"push.recipient,omitempty"`
	PushState     *DeviceDetailsPushStateEnum  `json:"push.state,omitempty"`
}

type DeviceDetailsInput struct {
	ClientID      *string                      `json:"clientId,omitempty" form:"name=clientId"`
	DeviceSecret  *string                      `json:"deviceSecret,omitempty" form:"name=deviceSecret"`
	FormFactor    *DeviceDetailsFormFactorEnum `json:"formFactor,omitempty" form:"name=formFactor"`
	ID            *string                      `json:"id,omitempty" form:"name=id"`
	Metadata      map[string]interface{}       `json:"metadata,omitempty" form:"name=metadata"`
	Platform      *DeviceDetailsPlatformEnum   `json:"platform,omitempty" form:"name=platform"`
	PushRecipient *Recipient                   `json:"push.recipient,omitempty" form:"name=push.recipient"`
}
