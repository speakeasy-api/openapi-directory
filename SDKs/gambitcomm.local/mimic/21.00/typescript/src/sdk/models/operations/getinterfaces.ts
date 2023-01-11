import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInterfacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInterfaces200ApplicationJSONObject?: Record<string, number>;
}
