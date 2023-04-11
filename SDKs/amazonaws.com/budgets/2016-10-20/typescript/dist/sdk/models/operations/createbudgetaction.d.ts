import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateBudgetActionXAmzTargetEnum {
    AWSBudgetServiceGatewayCreateBudgetAction = "AWSBudgetServiceGateway.CreateBudgetAction"
}
export declare class CreateBudgetActionRequest extends SpeakeasyBase {
    createBudgetActionRequest: shared.CreateBudgetActionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBudgetActionXAmzTargetEnum;
}
export declare class CreateBudgetActionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createBudgetActionResponse?: shared.CreateBudgetActionResponse;
    /**
     * CreationLimitExceededException
     */
    creationLimitExceededException?: any;
    /**
     * DuplicateRecordException
     */
    duplicateRecordException?: any;
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
     * ThrottlingException
     */
    throttlingException?: any;
}
