import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyPair
/** 
 * Describes a key pair.
**/
export class KeyPair extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyFingerprint?: Record<string, any>;

  @SpeakeasyMetadata()
  keyMaterial?: Record<string, any>;

  @SpeakeasyMetadata()
  keyName?: Record<string, any>;

  @SpeakeasyMetadata()
  keyPairId?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}
