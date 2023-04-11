import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DetachPolicyXAmzTargetEnum {
    AWSOrganizationsV20161128DetachPolicy = "AWSOrganizationsV20161128.DetachPolicy"
}
export declare class DetachPolicyRequest extends SpeakeasyBase {
    detachPolicyRequest: shared.DetachPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetachPolicyXAmzTargetEnum;
}
export declare class DetachPolicyResponse extends SpeakeasyBase {
    /**
     * AWSOrganizationsNotInUseException
     */
    awsOrganizationsNotInUseException?: any;
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    /**
     * ConstraintViolationException
     */
    constraintViolationException?: any;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * PolicyChangesInProgressException
     */
    policyChangesInProgressException?: any;
    /**
     * PolicyNotAttachedException
     */
    policyNotAttachedException?: any;
    /**
     * PolicyNotFoundException
     */
    policyNotFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TargetNotFoundException
     */
    targetNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnsupportedAPIEndpointException
     */
    unsupportedAPIEndpointException?: any;
}
