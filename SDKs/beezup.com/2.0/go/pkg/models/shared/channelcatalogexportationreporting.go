package shared

import (
	"time"
)

type ChannelCatalogExportationReporting struct {
	CacheStatus          *string   `json:"cacheStatus,omitempty"`
	ClientIPAddress      string    `json:"clientIpAddress"`
	ClientUserAgent      string    `json:"clientUserAgent"`
	ExportationDuration  *string   `json:"exportationDuration,omitempty"`
	ExportationUtcDate   time.Time `json:"exportationUtcDate"`
	ExportedProductCount *int32    `json:"exportedProductCount,omitempty"`
}
