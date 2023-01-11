import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventTypeEnum } from "./eventtypeenum";



// FunctionAssociationList
/** 
 * A CloudFront function that is associated with a cache behavior in a CloudFront distribution.
**/
export class FunctionAssociationList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventType: EventTypeEnum;

  @SpeakeasyMetadata()
  functionARN: string;
}
