import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListPlatformVersionsActionEnum {
    ListPlatformVersions = "ListPlatformVersions"
}
export declare enum POSTListPlatformVersionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTListPlatformVersionsRequest extends SpeakeasyBase {
    action: POSTListPlatformVersionsActionEnum;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTListPlatformVersionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListPlatformVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
