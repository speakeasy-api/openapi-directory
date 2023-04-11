import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisablePolicyTypeXAmzTargetEnum {
    AWSOrganizationsV20161128DisablePolicyType = "AWSOrganizationsV20161128.DisablePolicyType"
}
export declare class DisablePolicyTypeRequest extends SpeakeasyBase {
    disablePolicyTypeRequest: shared.DisablePolicyTypeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisablePolicyTypeXAmzTargetEnum;
}
export declare class DisablePolicyTypeResponse extends SpeakeasyBase {
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
    disablePolicyTypeResponse?: shared.DisablePolicyTypeResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * PolicyChangesInProgressException
     */
    policyChangesInProgressException?: any;
    /**
     * PolicyTypeNotEnabledException
     */
    policyTypeNotEnabledException?: any;
    /**
     * RootNotFoundException
     */
    rootNotFoundException?: any;
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
