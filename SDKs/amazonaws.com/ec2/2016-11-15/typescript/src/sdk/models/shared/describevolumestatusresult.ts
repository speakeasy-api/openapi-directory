import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeVolumeStatusResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  volumeStatuses?: Record<string, any>;
}
