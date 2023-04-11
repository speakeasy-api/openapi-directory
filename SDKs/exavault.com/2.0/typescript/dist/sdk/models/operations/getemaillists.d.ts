import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEmailListsRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * Related record types to include in the response. Valid option is `ownerUser`
     */
    include?: string;
}
export declare class GetEmailListsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    emailListCollectionResponse?: shared.EmailListCollectionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
