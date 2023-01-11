import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventTypeEnum } from "./eventtypeenum";



// LambdaFunctionAssociationList
/** 
 * A complex type that contains a Lambda function association.
**/
export class LambdaFunctionAssociationList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventType: EventTypeEnum;

  @SpeakeasyMetadata()
  lambdaFunctionARN: string;
}
