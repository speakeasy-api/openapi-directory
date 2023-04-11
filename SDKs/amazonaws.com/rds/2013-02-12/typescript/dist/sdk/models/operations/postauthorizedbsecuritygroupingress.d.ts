import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAuthorizeDBSecurityGroupIngressActionEnum {
    AuthorizeDBSecurityGroupIngress = "AuthorizeDBSecurityGroupIngress"
}
export declare enum POSTAuthorizeDBSecurityGroupIngressVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class POSTAuthorizeDBSecurityGroupIngressRequest extends SpeakeasyBase {
    action: POSTAuthorizeDBSecurityGroupIngressActionEnum;
    requestBody?: Uint8Array;
    version: POSTAuthorizeDBSecurityGroupIngressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAuthorizeDBSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
