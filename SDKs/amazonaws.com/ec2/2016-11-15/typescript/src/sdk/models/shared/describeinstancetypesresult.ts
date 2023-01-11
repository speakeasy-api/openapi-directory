import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeInstanceTypesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceTypes?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
