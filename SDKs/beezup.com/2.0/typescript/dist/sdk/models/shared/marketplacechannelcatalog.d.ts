import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonApiSettingsStatusEnum } from "./beezupcommonapisettingsstatusenum";
import { MarketplaceChannelCatalogLinks } from "./marketplacechannelcataloglinks";
import { MarketplaceChannelCatalogLovLinks } from "./marketplacechannelcataloglovlinks";
/**
 * This object indicates you the association between a channel catalog and a marketplace. The account identifier will be automatically defined based on your marketplace merchant identfier.
**/
export declare class MarketplaceChannelCatalog extends SpeakeasyBase {
    apiSettingsStatus: BeezUpCommonApiSettingsStatusEnum;
    beezUPChannelCatalogId: string;
    beezUPChannelId: string;
    beezUPMarketplaceName: any;
    beezUPStoreId: string;
    beezUPStoreName: string;
    enabled: boolean;
    links: MarketplaceChannelCatalogLinks;
    lovLinks: MarketplaceChannelCatalogLovLinks;
    marketplaceAccountId?: number;
    marketplaceBusinessCode: string;
    marketplaceIsoCountryCodeAlpha2: string;
    marketplaceMarketPlaceId: string;
    marketplaceMerchantIdentifiers?: Record<string, string>;
    marketplaceTechnicalCode: string;
}
