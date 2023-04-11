import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRemovePermissionActionEnum {
    RemovePermission = "RemovePermission"
}
export declare enum POSTRemovePermissionVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class POSTRemovePermissionRequest extends SpeakeasyBase {
    action: POSTRemovePermissionActionEnum;
    requestBody?: Uint8Array;
    version: POSTRemovePermissionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRemovePermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
