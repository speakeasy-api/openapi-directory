import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListTypeVersionsActionEnum {
    ListTypeVersions = "ListTypeVersions"
}
export declare enum POSTListTypeVersionsVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTListTypeVersionsRequest extends SpeakeasyBase {
    action: POSTListTypeVersionsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTListTypeVersionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListTypeVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
