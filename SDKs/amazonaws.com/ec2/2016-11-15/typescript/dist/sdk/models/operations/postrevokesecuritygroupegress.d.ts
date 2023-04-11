import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRevokeSecurityGroupEgressActionEnum {
    RevokeSecurityGroupEgress = "RevokeSecurityGroupEgress"
}
export declare enum POSTRevokeSecurityGroupEgressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTRevokeSecurityGroupEgressRequest extends SpeakeasyBase {
    action: POSTRevokeSecurityGroupEgressActionEnum;
    requestBody?: Uint8Array;
    version: POSTRevokeSecurityGroupEgressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRevokeSecurityGroupEgressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
