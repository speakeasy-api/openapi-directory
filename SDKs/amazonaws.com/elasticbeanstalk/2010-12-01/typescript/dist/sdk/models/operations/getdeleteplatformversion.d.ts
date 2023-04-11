import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeletePlatformVersionActionEnum {
    DeletePlatformVersion = "DeletePlatformVersion"
}
export declare enum GETDeletePlatformVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDeletePlatformVersionRequest extends SpeakeasyBase {
    action: GETDeletePlatformVersionActionEnum;
    /**
     * The ARN of the version of the custom platform.
     */
    platformArn?: string;
    version: GETDeletePlatformVersionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeletePlatformVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
