import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeVolumesModificationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  volumesModifications?: Record<string, any>;
}
