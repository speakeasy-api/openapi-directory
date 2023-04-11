import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAuthorizeDBSecurityGroupIngressActionEnum {
    AuthorizeDBSecurityGroupIngress = "AuthorizeDBSecurityGroupIngress"
}
export declare enum GETAuthorizeDBSecurityGroupIngressVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class GETAuthorizeDBSecurityGroupIngressRequest extends SpeakeasyBase {
    action: GETAuthorizeDBSecurityGroupIngressActionEnum;
    cidrip?: string;
    dbSecurityGroupName: string;
    ec2SecurityGroupId?: string;
    ec2SecurityGroupName?: string;
    ec2SecurityGroupOwnerId?: string;
    version: GETAuthorizeDBSecurityGroupIngressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAuthorizeDBSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
