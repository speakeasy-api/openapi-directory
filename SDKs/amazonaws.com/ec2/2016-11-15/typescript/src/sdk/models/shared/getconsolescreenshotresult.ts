import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConsoleScreenshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  imageData?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceId?: Record<string, any>;
}
