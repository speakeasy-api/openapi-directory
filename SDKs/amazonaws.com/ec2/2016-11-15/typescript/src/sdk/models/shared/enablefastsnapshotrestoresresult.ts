import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnableFastSnapshotRestoresResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  successful?: Record<string, any>;

  @SpeakeasyMetadata()
  unsuccessful?: Record<string, any>;
}
