package shared

// ChannelCatalogListLinks
// Indicates how global actions you can do like how to create a channel catalog, exclusion filter operators, etc...
type ChannelCatalogListLinks struct {
	Add             *LinksAddChannelCatalogLink                `json:"add,omitempty"`
	BeezUPColumns   *ExternalLinksCatalogGetBeezUpColumnsLink  `json:"beezUPColumns,omitempty"`
	FilterOperators *LinksGetChannelCatalogFilterOperatorsLink `json:"filterOperators,omitempty"`
	Self            *LinksGetChannelCatalogsLink               `json:"self,omitempty"`
}
