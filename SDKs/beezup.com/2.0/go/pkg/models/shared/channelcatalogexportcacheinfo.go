package shared

import (
	"time"
)

type ChannelCatalogExportCacheInfo struct {
	CacheStatus              string     `json:"cacheStatus"`
	ExpirationUtcDate        *time.Time `json:"expirationUtcDate,omitempty"`
	FeedURL                  *string    `json:"feedUrl,omitempty"`
	LastContentChangeUtcDate *time.Time `json:"lastContentChangeUtcDate,omitempty"`
	LastUpdateUtcDate        *time.Time `json:"lastUpdateUtcDate,omitempty"`
}
