package shared

type WebCrawlerModeEnum string

const (
	WebCrawlerModeEnumHostOnly   WebCrawlerModeEnum = "HOST_ONLY"
	WebCrawlerModeEnumSubdomains WebCrawlerModeEnum = "SUBDOMAINS"
	WebCrawlerModeEnumEverything WebCrawlerModeEnum = "EVERYTHING"
)
