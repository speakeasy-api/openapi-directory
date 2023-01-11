import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListDeviceEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Events" })
  events?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: Record<string, any>;
}
