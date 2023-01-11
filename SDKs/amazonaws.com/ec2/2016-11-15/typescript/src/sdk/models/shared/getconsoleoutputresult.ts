import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConsoleOutputResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceId?: Record<string, any>;

  @SpeakeasyMetadata()
  output?: Record<string, any>;

  @SpeakeasyMetadata()
  timestamp?: Record<string, any>;
}
