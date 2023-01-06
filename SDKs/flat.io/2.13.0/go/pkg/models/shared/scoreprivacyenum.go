package shared

type ScorePrivacyEnum string

const (
	ScorePrivacyEnumPublic             ScorePrivacyEnum = "public"
	ScorePrivacyEnumPrivate            ScorePrivacyEnum = "private"
	ScorePrivacyEnumOrganizationPublic ScorePrivacyEnum = "organizationPublic"
	ScorePrivacyEnumPrivateLink        ScorePrivacyEnum = "privateLink"
)
