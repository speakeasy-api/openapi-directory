import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSnapshotsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  snapshots?: Record<string, any>;
}
