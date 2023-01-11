import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMaxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMax200ApplicationJSONInt32Integer?: number;
}
