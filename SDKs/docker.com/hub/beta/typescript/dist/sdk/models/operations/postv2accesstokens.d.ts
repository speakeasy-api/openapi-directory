import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV2AccessTokensResponse extends SpeakeasyBase {
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
     * Created
     */
    createAccessTokensResponse?: shared.CreateAccessTokensResponse;
}
