import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateLBCookieStickinessPolicyActionEnum {
    CreateLBCookieStickinessPolicy = "CreateLBCookieStickinessPolicy"
}
export declare enum POSTCreateLBCookieStickinessPolicyVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class POSTCreateLBCookieStickinessPolicyRequest extends SpeakeasyBase {
    action: POSTCreateLBCookieStickinessPolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateLBCookieStickinessPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateLBCookieStickinessPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
