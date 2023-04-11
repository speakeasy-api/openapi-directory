import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEmailListByIdRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * ID of the email list to return.
     */
    id: number;
    /**
     * Related record types to include in the response. Valid option is `ownerUser`
     */
    include?: string;
}
export declare class GetEmailListByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    emailListResponse?: shared.EmailListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
