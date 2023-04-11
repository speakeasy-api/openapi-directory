import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeletePlatformVersionActionEnum {
    DeletePlatformVersion = "DeletePlatformVersion"
}
export declare enum POSTDeletePlatformVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTDeletePlatformVersionRequest extends SpeakeasyBase {
    action: POSTDeletePlatformVersionActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeletePlatformVersionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeletePlatformVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
