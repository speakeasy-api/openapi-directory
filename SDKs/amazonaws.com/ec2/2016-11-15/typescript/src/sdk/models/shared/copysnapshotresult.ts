import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CopySnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  snapshotId?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}
