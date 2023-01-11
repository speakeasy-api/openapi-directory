import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointItemResponse } from "./endpointitemresponse";
import { EventItemResponse } from "./eventitemresponse";



export class ItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointItemResponse" })
  endpointItemResponse?: EndpointItemResponse;

  @SpeakeasyMetadata({ data: "json, name=EventsItemResponse", elemType: EventItemResponse })
  eventsItemResponse?: Record<string, EventItemResponse>;
}
