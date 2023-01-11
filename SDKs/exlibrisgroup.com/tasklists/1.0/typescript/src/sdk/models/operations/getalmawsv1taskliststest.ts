import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAlmawsV1TaskListsTestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAlmawsV1TaskListsTest200ApplicationJSONObject?: Record<string, any>;
}
