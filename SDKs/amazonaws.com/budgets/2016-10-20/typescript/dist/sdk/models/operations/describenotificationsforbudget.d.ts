import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeNotificationsForBudgetXAmzTargetEnum {
    AWSBudgetServiceGatewayDescribeNotificationsForBudget = "AWSBudgetServiceGateway.DescribeNotificationsForBudget"
}
export declare class DescribeNotificationsForBudgetRequest extends SpeakeasyBase {
    describeNotificationsForBudgetRequest: shared.DescribeNotificationsForBudgetRequest;
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
    xAmzTarget: DescribeNotificationsForBudgetXAmzTargetEnum;
}
export declare class DescribeNotificationsForBudgetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeNotificationsForBudgetResponse?: shared.DescribeNotificationsForBudgetResponse;
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
