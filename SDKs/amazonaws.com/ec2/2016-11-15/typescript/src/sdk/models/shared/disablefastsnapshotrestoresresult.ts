import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisableFastSnapshotRestoresResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  successful?: Record<string, any>;

  @SpeakeasyMetadata()
  unsuccessful?: Record<string, any>;
}
