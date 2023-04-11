import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUntagRoleActionEnum {
    UntagRole = "UntagRole"
}
export declare enum POSTUntagRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTUntagRoleRequest extends SpeakeasyBase {
    action: POSTUntagRoleActionEnum;
    requestBody?: Uint8Array;
    version: POSTUntagRoleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUntagRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
