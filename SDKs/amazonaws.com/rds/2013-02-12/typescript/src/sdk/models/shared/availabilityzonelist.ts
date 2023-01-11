import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AvailabilityZoneList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  provisionedIopsCapable?: boolean;
}
