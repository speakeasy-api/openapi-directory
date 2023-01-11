import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointItemResponse } from "./endpointitemresponse";
import { EventItemResponse } from "./eventitemresponse";
export declare class ItemResponse extends SpeakeasyBase {
    endpointItemResponse?: EndpointItemResponse;
    eventsItemResponse?: Record<string, EventItemResponse>;
}
