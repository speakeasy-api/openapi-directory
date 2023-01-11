import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateFlowLogsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: Record<string, any>;

  @SpeakeasyMetadata()
  flowLogIds?: Record<string, any>;

  @SpeakeasyMetadata()
  unsuccessful?: Record<string, any>;
}
