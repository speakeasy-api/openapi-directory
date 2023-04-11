import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListStackSetOperationResultsActionEnum {
    ListStackSetOperationResults = "ListStackSetOperationResults"
}
export declare enum POSTListStackSetOperationResultsVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTListStackSetOperationResultsRequest extends SpeakeasyBase {
    action: POSTListStackSetOperationResultsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTListStackSetOperationResultsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListStackSetOperationResultsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
