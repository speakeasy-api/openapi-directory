package shared

// WebCrawlerConfiguration
// Provides the configuration information required for Amazon Kendra web crawler.
type WebCrawlerConfiguration struct {
	AuthenticationConfiguration      *AuthenticationConfiguration `json:"AuthenticationConfiguration,omitempty"`
	CrawlDepth                       *int64                       `json:"CrawlDepth,omitempty"`
	MaxContentSizePerPageInMegaBytes *float32                     `json:"MaxContentSizePerPageInMegaBytes,omitempty"`
	MaxLinksPerPage                  *int64                       `json:"MaxLinksPerPage,omitempty"`
	MaxUrlsPerMinuteCrawlRate        *int64                       `json:"MaxUrlsPerMinuteCrawlRate,omitempty"`
	ProxyConfiguration               *ProxyConfiguration          `json:"ProxyConfiguration,omitempty"`
	URLExclusionPatterns             []string                     `json:"UrlExclusionPatterns,omitempty"`
	URLInclusionPatterns             []string                     `json:"UrlInclusionPatterns,omitempty"`
	Urls                             Urls                         `json:"Urls"`
}
