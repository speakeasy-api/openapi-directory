import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTApplySecurityGroupsToLoadBalancerActionEnum {
    ApplySecurityGroupsToLoadBalancer = "ApplySecurityGroupsToLoadBalancer"
}
export declare enum POSTApplySecurityGroupsToLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class POSTApplySecurityGroupsToLoadBalancerRequest extends SpeakeasyBase {
    action: POSTApplySecurityGroupsToLoadBalancerActionEnum;
    requestBody?: Uint8Array;
    version: POSTApplySecurityGroupsToLoadBalancerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTApplySecurityGroupsToLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
