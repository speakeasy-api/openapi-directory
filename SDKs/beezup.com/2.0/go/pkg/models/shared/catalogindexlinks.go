package shared

type CatalogIndexLinks struct {
	BeezUPColumns LinksCatalogGetBeezUpColumnsLink `json:"beezUPColumns"`
	Self          LinksCatalogIndexLink            `json:"self"`
}
