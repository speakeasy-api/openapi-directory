import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AttachPolicyXAmzTargetEnum {
    AWSOrganizationsV20161128AttachPolicy = "AWSOrganizationsV20161128.AttachPolicy"
}
export declare class AttachPolicyRequest extends SpeakeasyBase {
    attachPolicyRequest: shared.AttachPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AttachPolicyXAmzTargetEnum;
}
export declare class AttachPolicyResponse extends SpeakeasyBase {
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
     * DuplicatePolicyAttachmentException
     */
    duplicatePolicyAttachmentException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * PolicyChangesInProgressException
     */
    policyChangesInProgressException?: any;
    /**
     * PolicyNotFoundException
     */
    policyNotFoundException?: any;
    /**
     * PolicyTypeNotEnabledException
     */
    policyTypeNotEnabledException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
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
