import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeBudgetActionHistoriesXAmzTargetEnum {
    AWSBudgetServiceGatewayDescribeBudgetActionHistories = "AWSBudgetServiceGateway.DescribeBudgetActionHistories"
}
export declare class DescribeBudgetActionHistoriesRequest extends SpeakeasyBase {
    describeBudgetActionHistoriesRequest: shared.DescribeBudgetActionHistoriesRequest;
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
    xAmzTarget: DescribeBudgetActionHistoriesXAmzTargetEnum;
}
export declare class DescribeBudgetActionHistoriesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeBudgetActionHistoriesResponse?: shared.DescribeBudgetActionHistoriesResponse;
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
