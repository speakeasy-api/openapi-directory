package shared

type ChannelCatalogCategoryConfigurationList struct {
	ChannelCatalogCategoryConfigurations []ChannelCatalogCategoryConfigurationInfo `json:"channelCatalogCategoryConfigurations"`
	CostStatus                           CostStatusEnum                            `json:"costStatus"`
	Links                                ChannelCatalogCategoryMappingsLinks       `json:"links"`
	MappingStatus                        MappingStatusEnum                         `json:"mappingStatus"`
}
