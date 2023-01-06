package shared

type CrawlDatamodelField struct {
	Group       string   `json:"group"`
	ID          string   `json:"id"`
	Multiple    bool     `json:"multiple"`
	Name        string   `json:"name"`
	Permissions []string `json:"permissions"`
	Subtype     string   `json:"subtype"`
	Type        string   `json:"type"`
}
