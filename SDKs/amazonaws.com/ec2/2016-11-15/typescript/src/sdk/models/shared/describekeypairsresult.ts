import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeKeyPairsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyPairs?: Record<string, any>;
}
