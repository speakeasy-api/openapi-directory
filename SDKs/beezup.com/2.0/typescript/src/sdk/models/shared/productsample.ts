import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProductSample
/** 
 * Describe a product sample
**/
export class ProductSample extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=productValues" })
  productValues?: Record<string, string>;
}
