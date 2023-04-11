import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetShareByIdRequest extends SpeakeasyBase {
    /**
     * Access Token
     */
    evAccessToken: string;
    /**
     * API Key
     */
    evApiKey: string;
    /**
     * ID of the share entry
     */
    id: number;
    /**
     * Comma separated list of relationships to include in response. Possible values are **owner**, **resources**, **notifications**, **activity**.
     */
    include?: string;
}
export declare class GetShareByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    shareResponse?: shared.ShareResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
