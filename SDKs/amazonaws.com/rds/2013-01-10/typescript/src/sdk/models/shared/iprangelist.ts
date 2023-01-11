import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpRangeList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrip?: string;

  @SpeakeasyMetadata()
  status?: string;
}
