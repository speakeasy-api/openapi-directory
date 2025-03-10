import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRevokeClusterSecurityGroupIngressActionEnum {
    RevokeClusterSecurityGroupIngress = "RevokeClusterSecurityGroupIngress"
}
export declare enum POSTRevokeClusterSecurityGroupIngressVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTRevokeClusterSecurityGroupIngressRequest extends SpeakeasyBase {
    action: POSTRevokeClusterSecurityGroupIngressActionEnum;
    requestBody?: Uint8Array;
    version: POSTRevokeClusterSecurityGroupIngressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRevokeClusterSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
