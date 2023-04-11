import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMessagesIdRequest extends SpeakeasyBase {
    /**
     * The `id` of the message you want to retrieve
     */
    id: string;
}
export declare class GetMessagesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request. The content or structure of your submission, or a parameter, was found to be invalid.
     */
    error?: shared.ErrorT;
    /**
     * The message detail
     */
    message?: shared.Message;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
