import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeRegionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  regions?: Record<string, any>;
}
