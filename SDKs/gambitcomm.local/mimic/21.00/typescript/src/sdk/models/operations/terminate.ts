import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TerminateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  terminate200ApplicationJSONObject?: Record<string, number>;
}
