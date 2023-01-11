import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CfgSaveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cfgSave200ApplicationJSONObject?: Record<string, number>;
}
