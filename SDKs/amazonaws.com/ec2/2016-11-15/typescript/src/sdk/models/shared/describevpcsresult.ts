import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeVpcsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcs?: Record<string, any>;
}
