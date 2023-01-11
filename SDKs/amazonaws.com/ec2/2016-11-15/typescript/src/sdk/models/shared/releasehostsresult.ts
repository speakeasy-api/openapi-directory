import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReleaseHostsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  successful?: Record<string, any>;

  @SpeakeasyMetadata()
  unsuccessful?: Record<string, any>;
}
