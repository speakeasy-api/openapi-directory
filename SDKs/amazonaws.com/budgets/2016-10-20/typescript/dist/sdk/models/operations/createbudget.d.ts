import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateBudgetXAmzTargetEnum {
    AWSBudgetServiceGatewayCreateBudget = "AWSBudgetServiceGateway.CreateBudget"
}
export declare class CreateBudgetRequest extends SpeakeasyBase {
    createBudgetRequest: shared.CreateBudgetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBudgetXAmzTargetEnum;
}
export declare class CreateBudgetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createBudgetResponse?: Record<string, any>;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
