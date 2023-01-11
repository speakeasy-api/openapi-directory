import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeSnapshotAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createVolumePermissions?: Record<string, any>;

  @SpeakeasyMetadata()
  productCodes?: Record<string, any>;

  @SpeakeasyMetadata()
  snapshotId?: Record<string, any>;
}
