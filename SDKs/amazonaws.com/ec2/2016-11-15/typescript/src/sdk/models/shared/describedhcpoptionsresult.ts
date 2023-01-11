import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDhcpOptionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dhcpOptions?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
