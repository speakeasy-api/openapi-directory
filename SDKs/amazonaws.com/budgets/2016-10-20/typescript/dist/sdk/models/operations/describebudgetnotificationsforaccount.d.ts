import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeBudgetNotificationsForAccountXAmzTargetEnum {
    AWSBudgetServiceGatewayDescribeBudgetNotificationsForAccount = "AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount"
}
export declare class DescribeBudgetNotificationsForAccountRequest extends SpeakeasyBase {
    describeBudgetNotificationsForAccountRequest: shared.DescribeBudgetNotificationsForAccountRequest;
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
    xAmzTarget: DescribeBudgetNotificationsForAccountXAmzTargetEnum;
}
export declare class DescribeBudgetNotificationsForAccountResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeBudgetNotificationsForAccountResponse?: shared.DescribeBudgetNotificationsForAccountResponse;
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
