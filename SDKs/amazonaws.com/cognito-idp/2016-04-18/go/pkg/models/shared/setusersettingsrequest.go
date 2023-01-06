package shared

// SetUserSettingsRequest
// Represents the request to set user settings.
type SetUserSettingsRequest struct {
	AccessToken string          `json:"AccessToken"`
	MFAOptions  []MfaOptionType `json:"MFAOptions"`
}
