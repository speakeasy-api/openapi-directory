import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogProductInfoLinks } from "./channelcatalogproductinfolinks";
import { ProductOverrideWithCatalogValue } from "./productoverridewithcatalogvalue";



// ChannelCatalogProductInfo
/** 
 * The channel catalog product information
**/
export class ChannelCatalogProductInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=excluded" })
  excluded: boolean;

  @SpeakeasyMetadata({ data: "json, name=excludedBy" })
  excludedBy?: string[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ChannelCatalogProductInfoLinks;

  @SpeakeasyMetadata({ data: "json, name=overrides", elemType: ProductOverrideWithCatalogValue })
  overrides: Record<string, ProductOverrideWithCatalogValue>;

  @SpeakeasyMetadata({ data: "json, name=productExists" })
  productExists: boolean;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId: string;

  @SpeakeasyMetadata({ data: "json, name=productImageUrl" })
  productImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=productSku" })
  productSku: string;

  @SpeakeasyMetadata({ data: "json, name=productTitle" })
  productTitle: string;

  @SpeakeasyMetadata({ data: "json, name=uncategorized" })
  uncategorized: boolean;
}
