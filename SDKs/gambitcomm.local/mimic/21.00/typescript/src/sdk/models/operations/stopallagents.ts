import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopAllAgentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stopAllAgents200ApplicationJSONObject?: Record<string, number>;
}
