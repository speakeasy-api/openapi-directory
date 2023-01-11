import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeVolumesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  volumes?: Record<string, any>;
}
