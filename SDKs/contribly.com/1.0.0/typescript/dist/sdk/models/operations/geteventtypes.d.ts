import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A list of event types
     */
    eventTypes?: shared.EventType[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
