import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountRequest extends SpeakeasyBase {
    /**
     * Access Token for the request
     */
    evAccessToken: string;
    /**
     * API Key required for the request
     */
    evApiKey: string;
    /**
     * Related records to include in the response. Valid option is **masterUser**
     */
    include?: string;
}
export declare class GetAccountResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    accountResponse?: shared.AccountResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
