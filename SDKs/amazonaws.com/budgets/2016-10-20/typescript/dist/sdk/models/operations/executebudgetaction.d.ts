import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExecuteBudgetActionXAmzTargetEnum {
    AWSBudgetServiceGatewayExecuteBudgetAction = "AWSBudgetServiceGateway.ExecuteBudgetAction"
}
export declare class ExecuteBudgetActionRequest extends SpeakeasyBase {
    executeBudgetActionRequest: shared.ExecuteBudgetActionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExecuteBudgetActionXAmzTargetEnum;
}
export declare class ExecuteBudgetActionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    executeBudgetActionResponse?: shared.ExecuteBudgetActionResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * ResourceLockedException
     */
    resourceLockedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
