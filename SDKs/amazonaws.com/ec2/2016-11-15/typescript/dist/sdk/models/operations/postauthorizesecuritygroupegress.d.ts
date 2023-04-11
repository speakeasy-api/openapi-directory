import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAuthorizeSecurityGroupEgressActionEnum {
    AuthorizeSecurityGroupEgress = "AuthorizeSecurityGroupEgress"
}
export declare enum POSTAuthorizeSecurityGroupEgressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAuthorizeSecurityGroupEgressRequest extends SpeakeasyBase {
    action: POSTAuthorizeSecurityGroupEgressActionEnum;
    requestBody?: Uint8Array;
    version: POSTAuthorizeSecurityGroupEgressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAuthorizeSecurityGroupEgressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
