import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetNetdevResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setNetdev200ApplicationJSONObject?: Record<string, number>;
}
