import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteBudgetActionXAmzTargetEnum {
    AWSBudgetServiceGatewayDeleteBudgetAction = "AWSBudgetServiceGateway.DeleteBudgetAction"
}
export declare class DeleteBudgetActionRequest extends SpeakeasyBase {
    deleteBudgetActionRequest: shared.DeleteBudgetActionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBudgetActionXAmzTargetEnum;
}
export declare class DeleteBudgetActionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteBudgetActionResponse?: shared.DeleteBudgetActionResponse;
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
