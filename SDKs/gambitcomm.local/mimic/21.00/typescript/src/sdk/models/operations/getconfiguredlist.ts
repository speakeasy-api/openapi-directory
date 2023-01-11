import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConfiguredListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getConfiguredList200ApplicationJSONInt32Integers?: number[];
}
