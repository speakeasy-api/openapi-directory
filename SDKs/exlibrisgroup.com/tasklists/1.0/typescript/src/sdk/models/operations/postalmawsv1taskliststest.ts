import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAlmawsV1TaskListsTestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postAlmawsV1TaskListsTest200ApplicationJSONObject?: Record<string, any>;
}
