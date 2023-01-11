import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductAdoptionPolicy } from "./productadoptionpolicy";
import { ErrorT } from "./error";



// ProductAdoptionPolicyResponse
/** 
 * This is the response object returned by a call to getProductAdoptionPolicies.
**/
export class ProductAdoptionPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=productAdoptionPolicies", elemType: ProductAdoptionPolicy })
  productAdoptionPolicies?: ProductAdoptionPolicy[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: ErrorT })
  warnings?: ErrorT[];
}
