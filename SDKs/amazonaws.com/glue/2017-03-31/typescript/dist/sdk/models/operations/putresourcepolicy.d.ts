import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutResourcePolicyXAmzTargetEnum {
    AWSGluePutResourcePolicy = "AWSGlue.PutResourcePolicy"
}
export declare class PutResourcePolicyRequest extends SpeakeasyBase {
    putResourcePolicyRequest: shared.PutResourcePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutResourcePolicyXAmzTargetEnum;
}
export declare class PutResourcePolicyResponse extends SpeakeasyBase {
    /**
     * ConditionCheckFailureException
     */
    conditionCheckFailureException?: any;
    contentType: string;
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
    /**
     * Success
     */
    putResourcePolicyResponse?: shared.PutResourcePolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
