import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivityListReceivedPublicEventsForUserRequest extends SpeakeasyBase {
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    username: string;
}
export declare class ActivityListReceivedPublicEventsForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    events?: shared.Event[];
}
