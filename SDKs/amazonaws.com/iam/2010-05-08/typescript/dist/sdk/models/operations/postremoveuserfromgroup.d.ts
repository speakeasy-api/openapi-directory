import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRemoveUserFromGroupActionEnum {
    RemoveUserFromGroup = "RemoveUserFromGroup"
}
export declare enum POSTRemoveUserFromGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTRemoveUserFromGroupRequest extends SpeakeasyBase {
    action: POSTRemoveUserFromGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTRemoveUserFromGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRemoveUserFromGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
