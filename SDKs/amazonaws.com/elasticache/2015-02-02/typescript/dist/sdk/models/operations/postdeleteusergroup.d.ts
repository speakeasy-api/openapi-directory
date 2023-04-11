import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteUserGroupActionEnum {
    DeleteUserGroup = "DeleteUserGroup"
}
export declare enum POSTDeleteUserGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTDeleteUserGroupRequest extends SpeakeasyBase {
    action: POSTDeleteUserGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteUserGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteUserGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
