import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRevokeDBSecurityGroupIngressActionEnum {
    RevokeDBSecurityGroupIngress = "RevokeDBSecurityGroupIngress"
}
export declare enum GETRevokeDBSecurityGroupIngressVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GETRevokeDBSecurityGroupIngressRequest extends SpeakeasyBase {
    action: GETRevokeDBSecurityGroupIngressActionEnum;
    cidrip?: string;
    dbSecurityGroupName: string;
    ec2SecurityGroupId?: string;
    ec2SecurityGroupName?: string;
    ec2SecurityGroupOwnerId?: string;
    version: GETRevokeDBSecurityGroupIngressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRevokeDBSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
