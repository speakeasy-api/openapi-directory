import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCancelImageLaunchPermissionActionEnum {
    CancelImageLaunchPermission = "CancelImageLaunchPermission"
}
export declare enum POSTCancelImageLaunchPermissionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCancelImageLaunchPermissionRequest extends SpeakeasyBase {
    action: POSTCancelImageLaunchPermissionActionEnum;
    requestBody?: Uint8Array;
    version: POSTCancelImageLaunchPermissionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCancelImageLaunchPermissionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
