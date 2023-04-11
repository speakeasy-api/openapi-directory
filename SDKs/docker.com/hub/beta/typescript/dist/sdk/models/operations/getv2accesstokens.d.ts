import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV2AccessTokensRequest extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetV2AccessTokensResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    valueError?: shared.ValueError;
    /**
     * OK
     */
    getAccessTokensResponse?: shared.GetAccessTokensResponse;
}
