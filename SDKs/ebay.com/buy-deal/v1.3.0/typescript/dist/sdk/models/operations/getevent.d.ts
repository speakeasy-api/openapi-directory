import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetEventRequest extends SpeakeasyBase {
    /**
     * A header used to specify the eBay marketplace ID.
     */
    xEbayCMarketplaceId: string;
    /**
     * The unique identifier for the eBay event.
     */
    eventId: string;
}
export declare class GetEventResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    event?: shared.Event;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
