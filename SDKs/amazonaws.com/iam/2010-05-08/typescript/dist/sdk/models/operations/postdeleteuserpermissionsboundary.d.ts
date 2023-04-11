import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteUserPermissionsBoundaryActionEnum {
    DeleteUserPermissionsBoundary = "DeleteUserPermissionsBoundary"
}
export declare enum POSTDeleteUserPermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTDeleteUserPermissionsBoundaryRequest extends SpeakeasyBase {
    action: POSTDeleteUserPermissionsBoundaryActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteUserPermissionsBoundaryVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteUserPermissionsBoundaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
