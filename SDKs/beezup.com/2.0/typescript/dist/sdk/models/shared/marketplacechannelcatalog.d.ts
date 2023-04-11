import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonApiSettingsStatusEnum } from "./beezupcommonapisettingsstatusenum";
import { MarketplaceChannelCatalogLinks } from "./marketplacechannelcataloglinks";
import { MarketplaceChannelCatalogLovLinks } from "./marketplacechannelcataloglovlinks";
/**
 * This object indicates you the association between a channel catalog and a marketplace. The account identifier will be automatically defined based on your marketplace merchant identfier.
 */
export declare class MarketplaceChannelCatalog extends SpeakeasyBase {
    apiSettingsStatus: BeezUPCommonApiSettingsStatusEnum;
    /**
     * The channel catalog identifier
     */
    beezUPChannelCatalogId: string;
    /**
     * The channel identifier
     */
    beezUPChannelId: string;
    /**
     * The marketplace name
     */
    beezUPMarketplaceName: any;
    /**
     * The store identifier
     */
    beezUPStoreId: string;
    /**
     * The store name
     */
    beezUPStoreName: string;
    /**
     * The enabled status of the Channel Catalog
     */
    enabled: boolean;
    /**
     * Indicate the actions you can do on a channel catalog. If the settings are valid, you will be able to access to the publication history.
     */
    links: MarketplaceChannelCatalogLinks;
    /**
     * Indicates the List Of Values related to the marketplace
     */
    lovLinks: MarketplaceChannelCatalogLovLinks;
    /**
     * The marketplace account identifier in BeezUP. This account identifier is based on your api settings.
     */
    marketplaceAccountId?: number;
    /**
     * In an marketplace technical code like CDiscount you can have several marketplaces like GO SPORT, etc. We identify them by a business code.
     */
    marketplaceBusinessCode: string;
    /**
     * The marketplace country iso code alpha 2 (see http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Decoding_table for more details)
     */
    marketplaceIsoCountryCodeAlpha2: string;
    /**
     * The marketplace identifier in the marketplace
     */
    marketplaceMarketPlaceId: string;
    /**
     * The marketplace merchant identifier list
     */
    marketplaceMerchantIdentifiers?: Record<string, string>;
    /**
     * The technical code of the marketplace.
     */
    marketplaceTechnicalCode: string;
}
