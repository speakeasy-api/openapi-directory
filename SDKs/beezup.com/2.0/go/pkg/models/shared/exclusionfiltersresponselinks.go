package shared

type ExclusionFiltersResponseLinks struct {
	Configure *LinksConfigureChannelCatalogExclusionFiltersLink `json:"configure,omitempty"`
	Self      LinksGetChannelCatalogExclusionFiltersLink        `json:"self"`
}
