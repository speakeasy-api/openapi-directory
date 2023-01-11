package openapisdk.models.shared;


public enum ChannelCatalogMarketplaceSettingDiscriminatorTypeEnum {
    CHANNEL_CATALOG_MARKETPLACE_STRING_SETTING("channelCatalogMarketplaceStringSetting"),
    CHANNEL_CATALOG_MARKETPLACE_INTEGER_SETTING("channelCatalogMarketplaceIntegerSetting"),
    CHANNEL_CATALOG_MARKETPLACE_BOOLEAN_SETTING("channelCatalogMarketplaceBooleanSetting"),
    CHANNEL_CATALOG_MARKETPLACE_NUMBER_SETTING("channelCatalogMarketplaceNumberSetting");

    public final String value;

    private ChannelCatalogMarketplaceSettingDiscriminatorTypeEnum(String value) {
        this.value = value;
    }
}
