// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// UserInfoAqLocation - Geolocation structure
type UserInfoAqLocation struct {
	// OIDC Address structure
	Address   *Address `json:"address,omitempty"`
	Latitude  *float32 `json:"latitude,omitempty"`
	Longitude *float32 `json:"longitude,omitempty"`
}

// UserInfo - OIDC UserInfo structure
type UserInfo struct {
	// OIDC Address structure
	Address *Address `json:"address,omitempty"`
	// Geolocation structure
	AqLocation          *UserInfoAqLocation `json:"aq:location,omitempty"`
	Email               *string             `json:"email,omitempty"`
	EmailVerified       *bool               `json:"email_verified,omitempty"`
	FamilyName          *string             `json:"family_name,omitempty"`
	GivenName           *string             `json:"given_name,omitempty"`
	Name                *string             `json:"name,omitempty"`
	PhoneNumber         *string             `json:"phone_number,omitempty"`
	PhoneNumberVerified *bool               `json:"phone_number_verified,omitempty"`
	Sub                 string              `json:"sub"`
}
