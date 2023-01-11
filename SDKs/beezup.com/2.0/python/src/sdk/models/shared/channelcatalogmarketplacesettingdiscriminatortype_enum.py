import dataclasses
from enum import Enum

class ChannelCatalogMarketplaceSettingDiscriminatorTypeEnum(str, Enum):
    CHANNEL_CATALOG_MARKETPLACE_STRING_SETTING = "channelCatalogMarketplaceStringSetting"
    CHANNEL_CATALOG_MARKETPLACE_INTEGER_SETTING = "channelCatalogMarketplaceIntegerSetting"
    CHANNEL_CATALOG_MARKETPLACE_BOOLEAN_SETTING = "channelCatalogMarketplaceBooleanSetting"
    CHANNEL_CATALOG_MARKETPLACE_NUMBER_SETTING = "channelCatalogMarketplaceNumberSetting"

