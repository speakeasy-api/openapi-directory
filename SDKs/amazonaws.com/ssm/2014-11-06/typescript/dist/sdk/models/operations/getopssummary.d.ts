import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetOpsSummaryXAmzTargetEnum {
    AmazonSSMGetOpsSummary = "AmazonSSM.GetOpsSummary"
}
export declare class GetOpsSummaryRequest extends SpeakeasyBase {
    getOpsSummaryRequest: shared.GetOpsSummaryRequest;
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
    xAmzTarget: GetOpsSummaryXAmzTargetEnum;
}
export declare class GetOpsSummaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getOpsSummaryResult?: shared.GetOpsSummaryResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidAggregatorException
     */
    invalidAggregatorException?: any;
    /**
     * InvalidFilter
     */
    invalidFilter?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    /**
     * InvalidTypeNameException
     */
    invalidTypeNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceDataSyncNotFoundException
     */
    resourceDataSyncNotFoundException?: any;
}
