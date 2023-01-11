import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeFastSnapshotRestoresResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fastSnapshotRestores?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
