package shared

// ScoreModification
// Edit the score metadata
type ScoreModification struct {
	Arranger     *string                `json:"arranger,omitempty"`
	Composer     *string                `json:"composer,omitempty"`
	CreationType *ScoreCreationTypeEnum `json:"creationType,omitempty"`
	Description  *string                `json:"description,omitempty"`
	License      *ScoreLicenseEnum      `json:"license,omitempty"`
	LicenseText  *string                `json:"licenseText,omitempty"`
	Lyricist     *string                `json:"lyricist,omitempty"`
	Privacy      *ScorePrivacyEnum      `json:"privacy,omitempty"`
	SharingKey   *string                `json:"sharingKey,omitempty"`
	Subtitle     *string                `json:"subtitle,omitempty"`
	Tags         []string               `json:"tags,omitempty"`
	Title        *string                `json:"title,omitempty"`
}
