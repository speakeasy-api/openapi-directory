import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAddUserToGroupActionEnum {
    AddUserToGroup = "AddUserToGroup"
}
export declare enum POSTAddUserToGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTAddUserToGroupRequest extends SpeakeasyBase {
    action: POSTAddUserToGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTAddUserToGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAddUserToGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
