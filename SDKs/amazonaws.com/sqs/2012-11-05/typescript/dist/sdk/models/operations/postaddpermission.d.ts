import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAddPermissionActionEnum {
    AddPermission = "AddPermission"
}
export declare enum POSTAddPermissionVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class POSTAddPermissionRequest extends SpeakeasyBase {
    action: POSTAddPermissionActionEnum;
    requestBody?: Uint8Array;
    version: POSTAddPermissionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAddPermissionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
