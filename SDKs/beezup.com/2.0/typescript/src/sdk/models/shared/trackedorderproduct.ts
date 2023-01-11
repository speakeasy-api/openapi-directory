import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrackedOrderProduct
/** 
 * The basic information related to a product
**/
export class TrackedOrderProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=margin" })
  margin: number;

  @SpeakeasyMetadata({ data: "json, name=productExists" })
  productExists: boolean;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId: string;

  @SpeakeasyMetadata({ data: "json, name=productImageUrl" })
  productImageUrl: string;

  @SpeakeasyMetadata({ data: "json, name=productSku" })
  productSku: string;

  @SpeakeasyMetadata({ data: "json, name=productTitle" })
  productTitle: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice: number;
}
