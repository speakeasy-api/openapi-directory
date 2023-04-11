import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateAppCookieStickinessPolicyActionEnum {
    CreateAppCookieStickinessPolicy = "CreateAppCookieStickinessPolicy"
}
export declare enum POSTCreateAppCookieStickinessPolicyVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class POSTCreateAppCookieStickinessPolicyRequest extends SpeakeasyBase {
    action: POSTCreateAppCookieStickinessPolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateAppCookieStickinessPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateAppCookieStickinessPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
