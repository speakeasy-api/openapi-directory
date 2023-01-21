package shared

// SiteMapsConfiguration
// <p>Provides the configuration information of the sitemap URLs to crawl.</p> <p> <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all other Amazon terms. Remember that you must only use the Amazon Kendra web crawler to index your own webpages, or webpages that you have authorization to index.</i> </p>
type SiteMapsConfiguration struct {
	SiteMaps []string `json:"SiteMaps"`
}
