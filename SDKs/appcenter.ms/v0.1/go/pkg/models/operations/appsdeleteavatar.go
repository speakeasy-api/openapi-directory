// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type AppsDeleteAvatarSecurity struct {
	APIToken string `security:"scheme,type=apiKey,subtype=header,name=X-API-Token"`
}

type AppsDeleteAvatarRequest struct {
	// The name of the application
	AppName string `pathParam:"style=simple,explode=false,name=app_name"`
	// The name of the owner
	OwnerName string `pathParam:"style=simple,explode=false,name=owner_name"`
}

type AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnum string

const (
	AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnumBadRequest          AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnum = "BadRequest"
	AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnumConflict            AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnum = "Conflict"
	AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnumNotAcceptable       AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnum = "NotAcceptable"
	AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnumNotFound            AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnum = "NotFound"
	AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnumInternalServerError AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnum = "InternalServerError"
	AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnumUnauthorized        AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnum = "Unauthorized"
	AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnumTooManyRequests     AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnum = "TooManyRequests"
)

func (e AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnum) ToPointer() *AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnum {
	return &e
}

func (e *AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "BadRequest":
		fallthrough
	case "Conflict":
		fallthrough
	case "NotAcceptable":
		fallthrough
	case "NotFound":
		fallthrough
	case "InternalServerError":
		fallthrough
	case "Unauthorized":
		fallthrough
	case "TooManyRequests":
		*e = AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnum: %v", v)
	}
}

type AppsDeleteAvatarDefaultApplicationJSONError struct {
	Code    AppsDeleteAvatarDefaultApplicationJSONErrorCodeEnum `json:"code"`
	Message string                                              `json:"message"`
}

// AppsDeleteAvatarDefaultApplicationJSON - Error
type AppsDeleteAvatarDefaultApplicationJSON struct {
	Error AppsDeleteAvatarDefaultApplicationJSONError `json:"error"`
}

type AppsDeleteAvatar200ApplicationJSONAzureSubscription struct {
	// If the subscription can be used for billing
	IsBillable *bool `json:"is_billable,omitempty"`
	// If the subscription is used for billing
	IsBilling *bool `json:"is_billing,omitempty"`
	// If the subscription is internal Microsoft subscription
	IsMicrosoftInternal *bool `json:"is_microsoft_internal,omitempty"`
	// The azure subscription id
	SubscriptionID string `json:"subscription_id"`
	// The name of the azure subscription
	SubscriptionName string `json:"subscription_name"`
	// The tenant id of the azure subscription belongs to
	TenantID string `json:"tenant_id"`
}

type AppsDeleteAvatar200ApplicationJSONMemberPermissionsEnum string

const (
	AppsDeleteAvatar200ApplicationJSONMemberPermissionsEnumManager   AppsDeleteAvatar200ApplicationJSONMemberPermissionsEnum = "manager"
	AppsDeleteAvatar200ApplicationJSONMemberPermissionsEnumDeveloper AppsDeleteAvatar200ApplicationJSONMemberPermissionsEnum = "developer"
	AppsDeleteAvatar200ApplicationJSONMemberPermissionsEnumViewer    AppsDeleteAvatar200ApplicationJSONMemberPermissionsEnum = "viewer"
	AppsDeleteAvatar200ApplicationJSONMemberPermissionsEnumTester    AppsDeleteAvatar200ApplicationJSONMemberPermissionsEnum = "tester"
)

func (e AppsDeleteAvatar200ApplicationJSONMemberPermissionsEnum) ToPointer() *AppsDeleteAvatar200ApplicationJSONMemberPermissionsEnum {
	return &e
}

func (e *AppsDeleteAvatar200ApplicationJSONMemberPermissionsEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "manager":
		fallthrough
	case "developer":
		fallthrough
	case "viewer":
		fallthrough
	case "tester":
		*e = AppsDeleteAvatar200ApplicationJSONMemberPermissionsEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AppsDeleteAvatar200ApplicationJSONMemberPermissionsEnum: %v", v)
	}
}

// AppsDeleteAvatar200ApplicationJSONOriginEnum - The creation origin of this app
type AppsDeleteAvatar200ApplicationJSONOriginEnum string

const (
	AppsDeleteAvatar200ApplicationJSONOriginEnumAppcenter AppsDeleteAvatar200ApplicationJSONOriginEnum = "appcenter"
	AppsDeleteAvatar200ApplicationJSONOriginEnumHockeyapp AppsDeleteAvatar200ApplicationJSONOriginEnum = "hockeyapp"
	AppsDeleteAvatar200ApplicationJSONOriginEnumCodepush  AppsDeleteAvatar200ApplicationJSONOriginEnum = "codepush"
)

func (e AppsDeleteAvatar200ApplicationJSONOriginEnum) ToPointer() *AppsDeleteAvatar200ApplicationJSONOriginEnum {
	return &e
}

func (e *AppsDeleteAvatar200ApplicationJSONOriginEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "appcenter":
		fallthrough
	case "hockeyapp":
		fallthrough
	case "codepush":
		*e = AppsDeleteAvatar200ApplicationJSONOriginEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AppsDeleteAvatar200ApplicationJSONOriginEnum: %v", v)
	}
}

// AppsDeleteAvatar200ApplicationJSONOsEnum - The OS the app will be running on
type AppsDeleteAvatar200ApplicationJSONOsEnum string

const (
	AppsDeleteAvatar200ApplicationJSONOsEnumAndroid AppsDeleteAvatar200ApplicationJSONOsEnum = "Android"
	AppsDeleteAvatar200ApplicationJSONOsEnumIOs     AppsDeleteAvatar200ApplicationJSONOsEnum = "iOS"
	AppsDeleteAvatar200ApplicationJSONOsEnumMacOs   AppsDeleteAvatar200ApplicationJSONOsEnum = "macOS"
	AppsDeleteAvatar200ApplicationJSONOsEnumTizen   AppsDeleteAvatar200ApplicationJSONOsEnum = "Tizen"
	AppsDeleteAvatar200ApplicationJSONOsEnumTvOs    AppsDeleteAvatar200ApplicationJSONOsEnum = "tvOS"
	AppsDeleteAvatar200ApplicationJSONOsEnumWindows AppsDeleteAvatar200ApplicationJSONOsEnum = "Windows"
	AppsDeleteAvatar200ApplicationJSONOsEnumLinux   AppsDeleteAvatar200ApplicationJSONOsEnum = "Linux"
	AppsDeleteAvatar200ApplicationJSONOsEnumCustom  AppsDeleteAvatar200ApplicationJSONOsEnum = "Custom"
)

func (e AppsDeleteAvatar200ApplicationJSONOsEnum) ToPointer() *AppsDeleteAvatar200ApplicationJSONOsEnum {
	return &e
}

func (e *AppsDeleteAvatar200ApplicationJSONOsEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Android":
		fallthrough
	case "iOS":
		fallthrough
	case "macOS":
		fallthrough
	case "Tizen":
		fallthrough
	case "tvOS":
		fallthrough
	case "Windows":
		fallthrough
	case "Linux":
		fallthrough
	case "Custom":
		*e = AppsDeleteAvatar200ApplicationJSONOsEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AppsDeleteAvatar200ApplicationJSONOsEnum: %v", v)
	}
}

// AppsDeleteAvatar200ApplicationJSONOwnerTypeEnum - The owner type. Can either be 'org' or 'user'
type AppsDeleteAvatar200ApplicationJSONOwnerTypeEnum string

const (
	AppsDeleteAvatar200ApplicationJSONOwnerTypeEnumOrg  AppsDeleteAvatar200ApplicationJSONOwnerTypeEnum = "org"
	AppsDeleteAvatar200ApplicationJSONOwnerTypeEnumUser AppsDeleteAvatar200ApplicationJSONOwnerTypeEnum = "user"
)

func (e AppsDeleteAvatar200ApplicationJSONOwnerTypeEnum) ToPointer() *AppsDeleteAvatar200ApplicationJSONOwnerTypeEnum {
	return &e
}

func (e *AppsDeleteAvatar200ApplicationJSONOwnerTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "org":
		fallthrough
	case "user":
		*e = AppsDeleteAvatar200ApplicationJSONOwnerTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AppsDeleteAvatar200ApplicationJSONOwnerTypeEnum: %v", v)
	}
}

// AppsDeleteAvatar200ApplicationJSONOwner - The information about the app's owner
type AppsDeleteAvatar200ApplicationJSONOwner struct {
	// The avatar URL of the owner
	AvatarURL *string `json:"avatar_url,omitempty"`
	// The owner's display name
	DisplayName string `json:"display_name"`
	// The owner's email address
	Email *string `json:"email,omitempty"`
	// The unique id (UUID) of the owner
	ID string `json:"id"`
	// The unique name that used to identify the owner
	Name string `json:"name"`
	// The owner type. Can either be 'org' or 'user'
	Type AppsDeleteAvatar200ApplicationJSONOwnerTypeEnum `json:"type"`
}

// AppsDeleteAvatar200ApplicationJSONPlatformEnum - The platform of the app
type AppsDeleteAvatar200ApplicationJSONPlatformEnum string

const (
	AppsDeleteAvatar200ApplicationJSONPlatformEnumJava            AppsDeleteAvatar200ApplicationJSONPlatformEnum = "Java"
	AppsDeleteAvatar200ApplicationJSONPlatformEnumObjectiveCSwift AppsDeleteAvatar200ApplicationJSONPlatformEnum = "Objective-C-Swift"
	AppsDeleteAvatar200ApplicationJSONPlatformEnumUwp             AppsDeleteAvatar200ApplicationJSONPlatformEnum = "UWP"
	AppsDeleteAvatar200ApplicationJSONPlatformEnumCordova         AppsDeleteAvatar200ApplicationJSONPlatformEnum = "Cordova"
	AppsDeleteAvatar200ApplicationJSONPlatformEnumReactNative     AppsDeleteAvatar200ApplicationJSONPlatformEnum = "React-Native"
	AppsDeleteAvatar200ApplicationJSONPlatformEnumUnity           AppsDeleteAvatar200ApplicationJSONPlatformEnum = "Unity"
	AppsDeleteAvatar200ApplicationJSONPlatformEnumElectron        AppsDeleteAvatar200ApplicationJSONPlatformEnum = "Electron"
	AppsDeleteAvatar200ApplicationJSONPlatformEnumXamarin         AppsDeleteAvatar200ApplicationJSONPlatformEnum = "Xamarin"
	AppsDeleteAvatar200ApplicationJSONPlatformEnumWpf             AppsDeleteAvatar200ApplicationJSONPlatformEnum = "WPF"
	AppsDeleteAvatar200ApplicationJSONPlatformEnumWinForms        AppsDeleteAvatar200ApplicationJSONPlatformEnum = "WinForms"
	AppsDeleteAvatar200ApplicationJSONPlatformEnumUnknown         AppsDeleteAvatar200ApplicationJSONPlatformEnum = "Unknown"
	AppsDeleteAvatar200ApplicationJSONPlatformEnumCustom          AppsDeleteAvatar200ApplicationJSONPlatformEnum = "Custom"
)

func (e AppsDeleteAvatar200ApplicationJSONPlatformEnum) ToPointer() *AppsDeleteAvatar200ApplicationJSONPlatformEnum {
	return &e
}

func (e *AppsDeleteAvatar200ApplicationJSONPlatformEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Java":
		fallthrough
	case "Objective-C-Swift":
		fallthrough
	case "UWP":
		fallthrough
	case "Cordova":
		fallthrough
	case "React-Native":
		fallthrough
	case "Unity":
		fallthrough
	case "Electron":
		fallthrough
	case "Xamarin":
		fallthrough
	case "WPF":
		fallthrough
	case "WinForms":
		fallthrough
	case "Unknown":
		fallthrough
	case "Custom":
		*e = AppsDeleteAvatar200ApplicationJSONPlatformEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AppsDeleteAvatar200ApplicationJSONPlatformEnum: %v", v)
	}
}

// AppsDeleteAvatar200ApplicationJSON - Success
type AppsDeleteAvatar200ApplicationJSON struct {
	// A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
	AppSecret         string                                               `json:"app_secret"`
	AzureSubscription *AppsDeleteAvatar200ApplicationJSONAzureSubscription `json:"azure_subscription,omitempty"`
	// The created date of this app
	CreatedAt *string `json:"created_at,omitempty"`
	// The description of the app
	Description *string `json:"description,omitempty"`
	// The display name of the app
	DisplayName string `json:"display_name"`
	// The string representation of the source of the app's icon
	IconSource *string `json:"icon_source,omitempty"`
	// The string representation of the URL pointing to the app's icon
	IconURL *string `json:"icon_url,omitempty"`
	// The unique ID (UUID) of the app
	ID string `json:"id"`
	// The permissions of the calling user
	MemberPermissions []AppsDeleteAvatar200ApplicationJSONMemberPermissionsEnum `json:"member_permissions,omitempty"`
	// The name of the app used in URLs
	Name string `json:"name"`
	// The creation origin of this app
	Origin AppsDeleteAvatar200ApplicationJSONOriginEnum `json:"origin"`
	// The OS the app will be running on
	Os AppsDeleteAvatar200ApplicationJSONOsEnum `json:"os"`
	// The information about the app's owner
	Owner AppsDeleteAvatar200ApplicationJSONOwner `json:"owner"`
	// The platform of the app
	Platform AppsDeleteAvatar200ApplicationJSONPlatformEnum `json:"platform"`
	// A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
	ReleaseType *string `json:"release_type,omitempty"`
	// The last updated date of this app
	UpdatedAt *string `json:"updated_at,omitempty"`
}

type AppsDeleteAvatarResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Success
	AppsDeleteAvatar200ApplicationJSONObject *AppsDeleteAvatar200ApplicationJSON
	// Error
	AppsDeleteAvatarDefaultApplicationJSONObject *AppsDeleteAvatarDefaultApplicationJSON
}
