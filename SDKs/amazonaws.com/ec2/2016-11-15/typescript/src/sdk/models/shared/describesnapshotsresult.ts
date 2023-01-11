import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeSnapshotsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  snapshots?: Record<string, any>;
}
