import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceRegistrationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CacheTTL" })
  cacheTTL?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceRegistration" })
  deviceRegistration?: string;
}
