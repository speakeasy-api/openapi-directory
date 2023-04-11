import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeNetworkInsightsAccessScopeAnalysesActionEnum {
    DescribeNetworkInsightsAccessScopeAnalyses = "DescribeNetworkInsightsAccessScopeAnalyses"
}
export declare enum POSTDescribeNetworkInsightsAccessScopeAnalysesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeNetworkInsightsAccessScopeAnalysesRequest extends SpeakeasyBase {
    action: POSTDescribeNetworkInsightsAccessScopeAnalysesActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeNetworkInsightsAccessScopeAnalysesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeNetworkInsightsAccessScopeAnalysesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
