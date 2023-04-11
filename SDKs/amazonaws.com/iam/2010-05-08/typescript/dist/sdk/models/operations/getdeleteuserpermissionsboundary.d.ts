import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteUserPermissionsBoundaryActionEnum {
    DeleteUserPermissionsBoundary = "DeleteUserPermissionsBoundary"
}
export declare enum GETDeleteUserPermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETDeleteUserPermissionsBoundaryRequest extends SpeakeasyBase {
    action: GETDeleteUserPermissionsBoundaryActionEnum;
    /**
     * The name (friendly name, not ARN) of the IAM user from which you want to remove the permissions boundary.
     */
    userName: string;
    version: GETDeleteUserPermissionsBoundaryVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteUserPermissionsBoundaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
