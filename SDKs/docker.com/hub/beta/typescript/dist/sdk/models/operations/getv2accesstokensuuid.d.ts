import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV2AccessTokensUuidRequest extends SpeakeasyBase {
    uuid: string;
}
/**
 * OK
 */
export declare class GetV2AccessTokensUuid200ApplicationJSON extends SpeakeasyBase {
    clientId?: string;
    createdAt?: string;
    creatorIp?: string;
    creatorUa?: string;
    generatedBy?: string;
    isActive?: boolean;
    lastUsed?: string;
    scopes?: string[];
    token?: string;
    tokenLabel?: string;
    uuid?: string;
}
export declare class GetV2AccessTokensUuidResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getV2AccessTokensUuid200ApplicationJSONObject?: GetV2AccessTokensUuid200ApplicationJSON;
}
