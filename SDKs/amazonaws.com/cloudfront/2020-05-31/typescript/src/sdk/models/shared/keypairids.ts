import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyPairIds
/** 
 * A list of CloudFront key pair identifiers.
**/
export class KeyPairIds extends SpeakeasyBase {
  @SpeakeasyMetadata()
  items?: Record<string, any>[];

  @SpeakeasyMetadata()
  quantity: number;
}
