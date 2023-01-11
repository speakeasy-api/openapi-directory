import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DocumentItemData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product_id" })
  productId: number;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;
}
