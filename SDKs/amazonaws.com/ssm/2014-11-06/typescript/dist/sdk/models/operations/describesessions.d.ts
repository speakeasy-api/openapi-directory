import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSessionsXAmzTargetEnum {
    AmazonSSMDescribeSessions = "AmazonSSM.DescribeSessions"
}
export declare class DescribeSessionsRequest extends SpeakeasyBase {
    describeSessionsRequest: shared.DescribeSessionsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSessionsXAmzTargetEnum;
}
export declare class DescribeSessionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSessionsResponse?: shared.DescribeSessionsResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidFilterKey
     */
    invalidFilterKey?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
