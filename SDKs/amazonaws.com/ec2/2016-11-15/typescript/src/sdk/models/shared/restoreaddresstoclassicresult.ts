import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RestoreAddressToClassicResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  publicIp?: Record<string, any>;

  @SpeakeasyMetadata()
  status?: Record<string, any>;
}
