import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateEmailListByIdUpdateEmailListRequestBody extends SpeakeasyBase {
    /**
     * Email addresses that replace existing list.
     */
    emails?: string[];
    /**
     * Name of the email list.
     */
    name?: string;
}
export declare class UpdateEmailListByIdRequest extends SpeakeasyBase {
    requestBody?: UpdateEmailListByIdUpdateEmailListRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * ID of the email list to update.
     */
    id: number;
}
export declare class UpdateEmailListByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    emailListResponse?: shared.EmailListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
