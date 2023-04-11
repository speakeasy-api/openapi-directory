import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMessagesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The default value is DESCENDING
 *
 * @remarks
 *
 * If the `sortOrder` is DESCENDING, the newest messages be first in the result.  ASCENDING places the oldest messages on top of the response.
 *
 */
export declare enum GetMessagesSortOrderEnum {
    Ascending = "ASCENDING"
}
export declare class GetMessagesRequest extends SpeakeasyBase {
    /**
     * See the message filtering for more information.
     */
    filter?: string;
    /**
     * The maximum number of messages that are returned.  The default is 1000.
     *
     * @remarks
     * The value of `limit` is not a guarantee that a specific number of messages will be in the response, even if there are more messages available.  Consider the case where you have 150 messages and you specify `limit=50`.  It is possible that only 49 messages will be returned.  The  way to make sure that there are no more messages is to submit a new call using the `id` filter field with the `<` operator (described below).
     */
    limit?: number;
    /**
     * The default value is DESCENDING
     *
     * @remarks
     *
     * If the `sortOrder` is DESCENDING, the newest messages be first in the result.  ASCENDING places the oldest messages on top of the response.
     *
     */
    sortOrder?: GetMessagesSortOrderEnum;
}
export declare class GetMessagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request. The content or structure of your submission, or a parameter, was found to be invalid.
     */
    error?: shared.ErrorT;
    /**
     * Contains the requested array of messages
     */
    messages?: shared.Message[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
