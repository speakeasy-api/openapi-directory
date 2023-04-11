import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRevokeDBSecurityGroupIngressActionEnum {
    RevokeDBSecurityGroupIngress = "RevokeDBSecurityGroupIngress"
}
export declare enum POSTRevokeDBSecurityGroupIngressVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class POSTRevokeDBSecurityGroupIngressRequest extends SpeakeasyBase {
    action: POSTRevokeDBSecurityGroupIngressActionEnum;
    requestBody?: Uint8Array;
    version: POSTRevokeDBSecurityGroupIngressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRevokeDBSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
