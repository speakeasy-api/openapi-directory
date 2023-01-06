package shared

// AccountPublications
// The publication history for an account
type AccountPublications struct {
	Links        AccountPublicationsLinks `json:"links"`
	Publications []PublicationReporting   `json:"publications"`
}
