import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportKeyPairResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyFingerprint?: Record<string, any>;

  @SpeakeasyMetadata()
  keyName?: Record<string, any>;

  @SpeakeasyMetadata()
  keyPairId?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}
