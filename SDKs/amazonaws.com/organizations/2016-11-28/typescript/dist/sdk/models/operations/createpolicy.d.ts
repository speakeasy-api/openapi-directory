import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePolicyXAmzTargetEnum {
    AWSOrganizationsV20161128CreatePolicy = "AWSOrganizationsV20161128.CreatePolicy"
}
export declare class CreatePolicyRequest extends SpeakeasyBase {
    createPolicyRequest: shared.CreatePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePolicyXAmzTargetEnum;
}
export declare class CreatePolicyResponse extends SpeakeasyBase {
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
     * Success
     */
    createPolicyResponse?: shared.CreatePolicyResponse;
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
     * PolicyTypeNotAvailableForOrganizationException
     */
    policyTypeNotAvailableForOrganizationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnsupportedAPIEndpointException
     */
    unsupportedAPIEndpointException?: any;
}
