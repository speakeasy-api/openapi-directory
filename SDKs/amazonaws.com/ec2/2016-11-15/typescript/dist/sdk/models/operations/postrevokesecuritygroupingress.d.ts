import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRevokeSecurityGroupIngressActionEnum {
    RevokeSecurityGroupIngress = "RevokeSecurityGroupIngress"
}
export declare enum POSTRevokeSecurityGroupIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTRevokeSecurityGroupIngressRequest extends SpeakeasyBase {
    action: POSTRevokeSecurityGroupIngressActionEnum;
    requestBody?: Uint8Array;
    version: POSTRevokeSecurityGroupIngressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRevokeSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
