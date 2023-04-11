import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateBudgetActionXAmzTargetEnum {
    AWSBudgetServiceGatewayUpdateBudgetAction = "AWSBudgetServiceGateway.UpdateBudgetAction"
}
export declare class UpdateBudgetActionRequest extends SpeakeasyBase {
    updateBudgetActionRequest: shared.UpdateBudgetActionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateBudgetActionXAmzTargetEnum;
}
export declare class UpdateBudgetActionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLockedException
     */
    resourceLockedException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateBudgetActionResponse?: shared.UpdateBudgetActionResponse;
}
