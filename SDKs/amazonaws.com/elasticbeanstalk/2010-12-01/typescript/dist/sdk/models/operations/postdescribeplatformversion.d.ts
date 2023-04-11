import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribePlatformVersionActionEnum {
    DescribePlatformVersion = "DescribePlatformVersion"
}
export declare enum POSTDescribePlatformVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTDescribePlatformVersionRequest extends SpeakeasyBase {
    action: POSTDescribePlatformVersionActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribePlatformVersionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribePlatformVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
