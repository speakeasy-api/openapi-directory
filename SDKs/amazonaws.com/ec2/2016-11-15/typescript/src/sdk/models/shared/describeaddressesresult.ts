import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAddressesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addresses?: Record<string, any>;
}
