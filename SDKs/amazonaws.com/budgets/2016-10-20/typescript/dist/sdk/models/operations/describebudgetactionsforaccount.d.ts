import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeBudgetActionsForAccountXAmzTargetEnum {
    AWSBudgetServiceGatewayDescribeBudgetActionsForAccount = "AWSBudgetServiceGateway.DescribeBudgetActionsForAccount"
}
export declare class DescribeBudgetActionsForAccountRequest extends SpeakeasyBase {
    describeBudgetActionsForAccountRequest: shared.DescribeBudgetActionsForAccountRequest;
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
    xAmzTarget: DescribeBudgetActionsForAccountXAmzTargetEnum;
}
export declare class DescribeBudgetActionsForAccountResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeBudgetActionsForAccountResponse?: shared.DescribeBudgetActionsForAccountResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
