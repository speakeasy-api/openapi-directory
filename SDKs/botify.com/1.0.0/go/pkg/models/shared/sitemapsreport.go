package shared

type SitemapsReport struct {
	Count          int64                   `json:"count"`
	Errors         []SitemapsReportSitemap `json:"errors"`
	SitemapIndexes []SitemapsReportSitemap `json:"sitemap_indexes"`
	SitemapOnly    SitemapsReportOnly      `json:"sitemap_only"`
	Sitemaps       []SitemapsReportSitemap `json:"sitemaps"`
}
