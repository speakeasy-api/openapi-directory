import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteDBSecurityGroupActionEnum {
    DeleteDBSecurityGroup = "DeleteDBSecurityGroup"
}
export declare enum POSTDeleteDBSecurityGroupVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class POSTDeleteDBSecurityGroupRequest extends SpeakeasyBase {
    action: POSTDeleteDBSecurityGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteDBSecurityGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteDBSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
