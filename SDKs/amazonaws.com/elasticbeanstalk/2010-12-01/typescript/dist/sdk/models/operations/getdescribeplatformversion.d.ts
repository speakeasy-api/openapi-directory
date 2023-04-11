import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribePlatformVersionActionEnum {
    DescribePlatformVersion = "DescribePlatformVersion"
}
export declare enum GETDescribePlatformVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDescribePlatformVersionRequest extends SpeakeasyBase {
    action: GETDescribePlatformVersionActionEnum;
    /**
     * The ARN of the platform version.
     */
    platformArn?: string;
    version: GETDescribePlatformVersionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribePlatformVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
