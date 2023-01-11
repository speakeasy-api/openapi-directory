import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHealthReadyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getHealthReady503ApplicationJSONString?: string;
}
