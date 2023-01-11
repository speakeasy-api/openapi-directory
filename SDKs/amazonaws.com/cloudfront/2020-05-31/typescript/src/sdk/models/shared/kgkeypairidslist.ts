import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyPairIds } from "./keypairids";



// KgKeyPairIdsList
/** 
 * A list of identifiers for the public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies.
**/
export class KgKeyPairIdsList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyGroupId?: string;

  @SpeakeasyMetadata()
  keyPairIds?: KeyPairIds;
}
