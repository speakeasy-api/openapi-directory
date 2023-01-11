import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BeezUpCommonProductBasicInfo
/** 
 * The basic information related to a product
**/
export class BeezUpCommonProductBasicInfo extends SpeakeasyBase {
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
}
