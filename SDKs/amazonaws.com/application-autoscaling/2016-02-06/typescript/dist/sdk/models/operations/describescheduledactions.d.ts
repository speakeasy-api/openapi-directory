import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeScheduledActionsXAmzTargetEnum {
    AnyScaleFrontendServiceDescribeScheduledActions = "AnyScaleFrontendService.DescribeScheduledActions"
}
export declare class DescribeScheduledActionsRequest extends SpeakeasyBase {
    describeScheduledActionsRequest: shared.DescribeScheduledActionsRequest;
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
    xAmzTarget: DescribeScheduledActionsXAmzTargetEnum;
}
export declare class DescribeScheduledActionsResponse extends SpeakeasyBase {
    /**
     * ConcurrentUpdateException
     */
    concurrentUpdateException?: any;
    contentType: string;
    /**
     * Success
     */
    describeScheduledActionsResponse?: shared.DescribeScheduledActionsResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
