import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetaddrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetaddr200ApplicationJSONObject?: Record<string, number>;
}
