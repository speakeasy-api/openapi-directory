package shared

type SitemapsReportSitemap struct {
	Error          *SitemapsReportSitemapError `json:"error,omitempty"`
	FileType       *string                     `json:"file_type,omitempty"`
	InvalidUrls    *int64                      `json:"invalid_urls,omitempty"`
	SitemapIndexes []string                    `json:"sitemap_indexes,omitempty"`
	URL            string                      `json:"url"`
	ValidUrls      *int64                      `json:"valid_urls,omitempty"`
}
