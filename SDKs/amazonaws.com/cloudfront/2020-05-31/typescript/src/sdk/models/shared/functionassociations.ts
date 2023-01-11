import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionAssociationList } from "./functionassociationlist";



// FunctionAssociations
/** 
 * A list of CloudFront functions that are associated with a cache behavior in a CloudFront distribution. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.
**/
export class FunctionAssociations extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FunctionAssociationList })
  items?: FunctionAssociationList[];

  @SpeakeasyMetadata()
  quantity: number;
}
