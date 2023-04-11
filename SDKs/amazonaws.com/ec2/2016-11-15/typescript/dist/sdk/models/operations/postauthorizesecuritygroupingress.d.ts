import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAuthorizeSecurityGroupIngressActionEnum {
    AuthorizeSecurityGroupIngress = "AuthorizeSecurityGroupIngress"
}
export declare enum POSTAuthorizeSecurityGroupIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAuthorizeSecurityGroupIngressRequest extends SpeakeasyBase {
    action: POSTAuthorizeSecurityGroupIngressActionEnum;
    requestBody?: Uint8Array;
    version: POSTAuthorizeSecurityGroupIngressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAuthorizeSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
