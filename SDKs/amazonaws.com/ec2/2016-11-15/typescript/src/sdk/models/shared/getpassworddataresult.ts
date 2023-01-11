import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPasswordDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceId?: Record<string, any>;

  @SpeakeasyMetadata()
  passwordData?: Record<string, any>;

  @SpeakeasyMetadata()
  timestamp?: Record<string, any>;
}
