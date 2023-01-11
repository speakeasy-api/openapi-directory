import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeByoipCidrsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  byoipCidrs?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
