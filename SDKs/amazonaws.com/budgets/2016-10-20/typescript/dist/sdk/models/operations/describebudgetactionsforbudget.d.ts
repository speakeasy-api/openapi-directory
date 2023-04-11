import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeBudgetActionsForBudgetXAmzTargetEnum {
    AWSBudgetServiceGatewayDescribeBudgetActionsForBudget = "AWSBudgetServiceGateway.DescribeBudgetActionsForBudget"
}
export declare class DescribeBudgetActionsForBudgetRequest extends SpeakeasyBase {
    describeBudgetActionsForBudgetRequest: shared.DescribeBudgetActionsForBudgetRequest;
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
    xAmzTarget: DescribeBudgetActionsForBudgetXAmzTargetEnum;
}
export declare class DescribeBudgetActionsForBudgetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeBudgetActionsForBudgetResponse?: shared.DescribeBudgetActionsForBudgetResponse;
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
