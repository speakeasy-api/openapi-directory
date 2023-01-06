package shared

type CrawlDatamodel struct {
	Fields []CrawlDatamodelField `json:"fields"`
	Groups []CrawlDatamodelGroup `json:"groups"`
}
