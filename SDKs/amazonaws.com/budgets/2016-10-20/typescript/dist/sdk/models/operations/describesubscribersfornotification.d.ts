import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSubscribersForNotificationXAmzTargetEnum {
    AWSBudgetServiceGatewayDescribeSubscribersForNotification = "AWSBudgetServiceGateway.DescribeSubscribersForNotification"
}
export declare class DescribeSubscribersForNotificationRequest extends SpeakeasyBase {
    describeSubscribersForNotificationRequest: shared.DescribeSubscribersForNotificationRequest;
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
    xAmzTarget: DescribeSubscribersForNotificationXAmzTargetEnum;
}
export declare class DescribeSubscribersForNotificationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeSubscribersForNotificationResponse?: shared.DescribeSubscribersForNotificationResponse;
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
