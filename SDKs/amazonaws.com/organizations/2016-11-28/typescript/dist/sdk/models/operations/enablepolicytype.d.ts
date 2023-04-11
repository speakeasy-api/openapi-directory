import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum EnablePolicyTypeXAmzTargetEnum {
    AWSOrganizationsV20161128EnablePolicyType = "AWSOrganizationsV20161128.EnablePolicyType"
}
export declare class EnablePolicyTypeRequest extends SpeakeasyBase {
    enablePolicyTypeRequest: shared.EnablePolicyTypeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnablePolicyTypeXAmzTargetEnum;
}
export declare class EnablePolicyTypeResponse extends SpeakeasyBase {
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
    enablePolicyTypeResponse?: shared.EnablePolicyTypeResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * PolicyChangesInProgressException
     */
    policyChangesInProgressException?: any;
    /**
     * PolicyTypeAlreadyEnabledException
     */
    policyTypeAlreadyEnabledException?: any;
    /**
     * PolicyTypeNotAvailableForOrganizationException
     */
    policyTypeNotAvailableForOrganizationException?: any;
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
