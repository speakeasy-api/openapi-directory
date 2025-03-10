// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type CreateJobRequest struct {
	AddressID                    *string                       `json:"AddressId,omitempty"`
	ClusterID                    *string                       `json:"ClusterId,omitempty"`
	Description                  *string                       `json:"Description,omitempty"`
	DeviceConfiguration          *DeviceConfiguration          `json:"DeviceConfiguration,omitempty"`
	ForwardingAddressID          *string                       `json:"ForwardingAddressId,omitempty"`
	JobType                      *JobTypeEnum                  `json:"JobType,omitempty"`
	KmsKeyARN                    *string                       `json:"KmsKeyARN,omitempty"`
	LongTermPricingID            *string                       `json:"LongTermPricingId,omitempty"`
	Notification                 *Notification                 `json:"Notification,omitempty"`
	OnDeviceServiceConfiguration *OnDeviceServiceConfiguration `json:"OnDeviceServiceConfiguration,omitempty"`
	RemoteManagement             *RemoteManagementEnum         `json:"RemoteManagement,omitempty"`
	Resources                    *JobResource                  `json:"Resources,omitempty"`
	RoleARN                      *string                       `json:"RoleARN,omitempty"`
	ShippingOption               *ShippingOptionEnum           `json:"ShippingOption,omitempty"`
	SnowballCapacityPreference   *SnowballCapacityEnum         `json:"SnowballCapacityPreference,omitempty"`
	SnowballType                 *SnowballTypeEnum             `json:"SnowballType,omitempty"`
	TaxDocuments                 *TaxDocuments                 `json:"TaxDocuments,omitempty"`
}
