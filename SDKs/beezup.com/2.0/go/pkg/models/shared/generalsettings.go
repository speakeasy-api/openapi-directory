package shared

// GeneralSettings
// Represents the general settings of your channel catalog
type GeneralSettings struct {
	AcceptToPublishInfo           bool `json:"acceptToPublishInfo"`
	ActiveBeezUPTracking          bool `json:"activeBeezUPTracking"`
	DoNotExportOutOfStockProducts bool `json:"doNotExportOutOfStockProducts"`
}
