import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeBudgetPerformanceHistoryXAmzTargetEnum {
    AWSBudgetServiceGatewayDescribeBudgetPerformanceHistory = "AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory"
}
export declare class DescribeBudgetPerformanceHistoryRequest extends SpeakeasyBase {
    describeBudgetPerformanceHistoryRequest: shared.DescribeBudgetPerformanceHistoryRequest;
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
    xAmzTarget: DescribeBudgetPerformanceHistoryXAmzTargetEnum;
}
export declare class DescribeBudgetPerformanceHistoryResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeBudgetPerformanceHistoryResponse?: shared.DescribeBudgetPerformanceHistoryResponse;
    /**
     * ExpiredNextTokenException
     */
    expiredNextTokenException?: any;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
