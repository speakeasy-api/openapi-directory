import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePolicyXAmzTargetEnum {
    AWSOrganizationsV20161128UpdatePolicy = "AWSOrganizationsV20161128.UpdatePolicy"
}
export declare class UpdatePolicyRequest extends SpeakeasyBase {
    updatePolicyRequest: shared.UpdatePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePolicyXAmzTargetEnum;
}
export declare class UpdatePolicyResponse extends SpeakeasyBase {
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
     * DuplicatePolicyException
     */
    duplicatePolicyException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * MalformedPolicyDocumentException
     */
    malformedPolicyDocumentException?: any;
    /**
     * PolicyChangesInProgressException
     */
    policyChangesInProgressException?: any;
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
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnsupportedAPIEndpointException
     */
    unsupportedAPIEndpointException?: any;
    /**
     * Success
     */
    updatePolicyResponse?: shared.UpdatePolicyResponse;
}
