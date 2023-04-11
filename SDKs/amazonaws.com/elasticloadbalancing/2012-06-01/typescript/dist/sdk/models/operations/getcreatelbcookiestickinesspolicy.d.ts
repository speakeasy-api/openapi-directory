import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateLBCookieStickinessPolicyActionEnum {
    CreateLBCookieStickinessPolicy = "CreateLBCookieStickinessPolicy"
}
export declare enum GETCreateLBCookieStickinessPolicyVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GETCreateLBCookieStickinessPolicyRequest extends SpeakeasyBase {
    action: GETCreateLBCookieStickinessPolicyActionEnum;
    /**
     * The time period, in seconds, after which the cookie should be considered stale. If you do not specify this parameter, the default value is 0, which indicates that the sticky session should last for the duration of the browser session.
     */
    cookieExpirationPeriod?: number;
    /**
     * The name of the load balancer.
     */
    loadBalancerName: string;
    /**
     * The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.
     */
    policyName: string;
    version: GETCreateLBCookieStickinessPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateLBCookieStickinessPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
