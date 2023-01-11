import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RandomProductList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=products" })
  products: any[];
}
