import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateOrganizationalUnitXAmzTargetEnum {
    AWSOrganizationsV20161128CreateOrganizationalUnit = "AWSOrganizationsV20161128.CreateOrganizationalUnit"
}
export declare class CreateOrganizationalUnitRequest extends SpeakeasyBase {
    createOrganizationalUnitRequest: shared.CreateOrganizationalUnitRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateOrganizationalUnitXAmzTargetEnum;
}
export declare class CreateOrganizationalUnitResponse extends SpeakeasyBase {
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
    createOrganizationalUnitResponse?: shared.CreateOrganizationalUnitResponse;
    /**
     * DuplicateOrganizationalUnitException
     */
    duplicateOrganizationalUnitException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ParentNotFoundException
     */
    parentNotFoundException?: any;
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
}
