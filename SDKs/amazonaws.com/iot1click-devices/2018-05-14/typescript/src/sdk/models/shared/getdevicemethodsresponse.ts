import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceMethodsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceMethods" })
  deviceMethods?: Record<string, any>;
}
