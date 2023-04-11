import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreatePlatformVersionActionEnum {
    CreatePlatformVersion = "CreatePlatformVersion"
}
export declare enum POSTCreatePlatformVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTCreatePlatformVersionRequest extends SpeakeasyBase {
    action: POSTCreatePlatformVersionActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreatePlatformVersionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreatePlatformVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
