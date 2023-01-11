import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Devices" })
  devices?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: Record<string, any>;
}
