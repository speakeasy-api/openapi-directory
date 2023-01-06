package shared

// PublicationReporting
// Model for a publication reporting, can have multiple feeds
type PublicationReporting struct {
	Feeds           []PublicationFeedReporting `json:"feeds"`
	PublicationType PublicationTypeEnum        `json:"publicationType"`
}
