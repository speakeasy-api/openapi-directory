import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListStackSetOperationsActionEnum {
    ListStackSetOperations = "ListStackSetOperations"
}
export declare enum POSTListStackSetOperationsVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTListStackSetOperationsRequest extends SpeakeasyBase {
    action: POSTListStackSetOperationsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTListStackSetOperationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListStackSetOperationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
