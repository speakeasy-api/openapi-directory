import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteResourcePolicyXAmzTargetEnum {
    AWSGlueDeleteResourcePolicy = "AWSGlue.DeleteResourcePolicy"
}
export declare class DeleteResourcePolicyRequest extends SpeakeasyBase {
    deleteResourcePolicyRequest: shared.DeleteResourcePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourcePolicyXAmzTargetEnum;
}
export declare class DeleteResourcePolicyResponse extends SpeakeasyBase {
    /**
     * ConditionCheckFailureException
     */
    conditionCheckFailureException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteResourcePolicyResponse?: Record<string, any>;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
