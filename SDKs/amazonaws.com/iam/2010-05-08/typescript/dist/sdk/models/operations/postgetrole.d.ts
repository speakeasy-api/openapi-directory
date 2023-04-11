import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetRoleActionEnum {
    GetRole = "GetRole"
}
export declare enum POSTGetRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTGetRoleRequest extends SpeakeasyBase {
    action: POSTGetRoleActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetRoleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
