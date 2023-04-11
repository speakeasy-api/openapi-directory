import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchV2AccessTokensUuidRequest extends SpeakeasyBase {
    patchAccessTokenRequest: shared.PatchAccessTokenRequest;
    uuid: string;
}
export declare class PatchV2AccessTokensUuidResponse extends SpeakeasyBase {
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
    patchAccessTokenResponse?: shared.PatchAccessTokenResponse;
}
