package shared

type ProjectSettingsSerializer struct {
	AllowedDomains              []string `json:"allowed_domains"`
	BlacklistedDomains          []string `json:"blacklisted_domains"`
	CompareCrawl                *bool    `json:"compare_crawl,omitempty"`
	CrawlGzip                   *bool    `json:"crawl_gzip,omitempty"`
	ExtraHeaders                *string  `json:"extra_headers,omitempty"`
	GoogleAnalyticsAccountEmail *string  `json:"google_analytics_account_email,omitempty"`
	GoogleAnalyticsNbDays       *int64   `json:"google_analytics_nb_days,omitempty"`
	GoogleAnalyticsSiteID       *int64   `json:"google_analytics_site_id,omitempty"`
	GoogleSocialAuthID          *int64   `json:"google_social_auth_id,omitempty"`
	HasRobotsTxt                *string  `json:"has_robots_txt,omitempty"`
	HeaderSettings              []string `json:"header_settings"`
	MaxDepth                    *int64   `json:"max_depth,omitempty"`
	MaxNbPages                  int64    `json:"max_nb_pages"`
	MaxPagesPerSec              *int64   `json:"max_pages_per_sec,omitempty"`
	RespectNofollow             *bool    `json:"respect_nofollow,omitempty"`
	Sitemaps                    []string `json:"sitemaps"`
	StartUrls                   []string `json:"start_urls"`
	UserAgent                   *string  `json:"user_agent,omitempty"`
}
