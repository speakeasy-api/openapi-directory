import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateOrganizationXAmzTargetEnum {
    AWSOrganizationsV20161128CreateOrganization = "AWSOrganizationsV20161128.CreateOrganization"
}
export declare class CreateOrganizationRequest extends SpeakeasyBase {
    createOrganizationRequest: shared.CreateOrganizationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateOrganizationXAmzTargetEnum;
}
export declare class CreateOrganizationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccessDeniedForDependencyException
     */
    accessDeniedForDependencyException?: any;
    /**
     * AlreadyInOrganizationException
     */
    alreadyInOrganizationException?: any;
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
    createOrganizationResponse?: shared.CreateOrganizationResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
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
}
