import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateRoleActionEnum {
    CreateRole = "CreateRole"
}
export declare enum POSTCreateRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTCreateRoleRequest extends SpeakeasyBase {
    action: POSTCreateRoleActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateRoleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
