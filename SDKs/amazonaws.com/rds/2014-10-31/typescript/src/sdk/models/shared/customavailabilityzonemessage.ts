import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomAvailabilityZoneList } from "./customavailabilityzonelist";



export class CustomAvailabilityZoneMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CustomAvailabilityZoneList })
  customAvailabilityZones?: CustomAvailabilityZoneList[];

  @SpeakeasyMetadata()
  marker?: string;
}
