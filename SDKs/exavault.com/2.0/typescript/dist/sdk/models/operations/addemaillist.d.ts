import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddEmailListAddEmailListRequestBody extends SpeakeasyBase {
    /**
     * Array of email addresses to include in the email list.
     */
    emails: string[];
    /**
     * Name of the email list.
     */
    name: string;
}
export declare class AddEmailListRequest extends SpeakeasyBase {
    requestBody?: AddEmailListAddEmailListRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
}
export declare class AddEmailListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    emailListResponse?: shared.EmailListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
