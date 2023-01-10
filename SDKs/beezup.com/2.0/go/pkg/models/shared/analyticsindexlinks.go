package shared

type AnalyticsIndexLinks struct {
	Self           LinksAnalyticsIndexLink     `json:"self"`
	TrackingStatus *LinksGetTrackingStatusLink `json:"trackingStatus,omitempty"`
}
