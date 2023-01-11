import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChannelCatalogCategoryMappingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryMappingDisabledByMerchant" })
  categoryMappingDisabledByMerchant?: boolean;
}
