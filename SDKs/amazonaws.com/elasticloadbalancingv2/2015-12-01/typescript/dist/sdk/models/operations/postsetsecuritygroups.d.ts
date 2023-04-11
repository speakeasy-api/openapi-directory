import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSetSecurityGroupsActionEnum {
    SetSecurityGroups = "SetSecurityGroups"
}
export declare enum POSTSetSecurityGroupsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTSetSecurityGroupsRequest extends SpeakeasyBase {
    action: POSTSetSecurityGroupsActionEnum;
    requestBody?: Uint8Array;
    version: POSTSetSecurityGroupsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSetSecurityGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
