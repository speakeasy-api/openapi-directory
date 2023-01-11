import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusCode" })
  statusCode?: number;
}
