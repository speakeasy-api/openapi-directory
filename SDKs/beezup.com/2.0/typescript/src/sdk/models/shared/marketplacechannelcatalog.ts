import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonApiSettingsStatusEnum } from "./beezupcommonapisettingsstatusenum";
import { MarketplaceChannelCatalogLinks } from "./marketplacechannelcataloglinks";
import { MarketplaceChannelCatalogLovLinks } from "./marketplacechannelcataloglovlinks";



// MarketplaceChannelCatalog
/** 
 * This object indicates you the association between a channel catalog and a marketplace. The account identifier will be automatically defined based on your marketplace merchant identfier.
**/
export class MarketplaceChannelCatalog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiSettingsStatus" })
  apiSettingsStatus: BeezUpCommonApiSettingsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=beezUPChannelCatalogId" })
  beezUPChannelCatalogId: string;

  @SpeakeasyMetadata({ data: "json, name=beezUPChannelId" })
  beezUPChannelId: string;

  @SpeakeasyMetadata({ data: "json, name=beezUPMarketplaceName" })
  beezUPMarketplaceName: any;

  @SpeakeasyMetadata({ data: "json, name=beezUPStoreId" })
  beezUPStoreId: string;

  @SpeakeasyMetadata({ data: "json, name=beezUPStoreName" })
  beezUPStoreName: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: MarketplaceChannelCatalogLinks;

  @SpeakeasyMetadata({ data: "json, name=lovLinks" })
  lovLinks: MarketplaceChannelCatalogLovLinks;

  @SpeakeasyMetadata({ data: "json, name=marketplaceAccountId" })
  marketplaceAccountId?: number;

  @SpeakeasyMetadata({ data: "json, name=marketplaceBusinessCode" })
  marketplaceBusinessCode: string;

  @SpeakeasyMetadata({ data: "json, name=marketplaceIsoCountryCodeAlpha2" })
  marketplaceIsoCountryCodeAlpha2: string;

  @SpeakeasyMetadata({ data: "json, name=marketplaceMarketPlaceId" })
  marketplaceMarketPlaceId: string;

  @SpeakeasyMetadata({ data: "json, name=marketplaceMerchantIdentifiers" })
  marketplaceMerchantIdentifiers?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;
}
