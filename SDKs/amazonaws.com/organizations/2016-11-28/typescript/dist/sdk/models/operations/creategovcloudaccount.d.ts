import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateGovCloudAccountXAmzTargetEnum {
    AWSOrganizationsV20161128CreateGovCloudAccount = "AWSOrganizationsV20161128.CreateGovCloudAccount"
}
export declare class CreateGovCloudAccountRequest extends SpeakeasyBase {
    createGovCloudAccountRequest: shared.CreateGovCloudAccountRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGovCloudAccountXAmzTargetEnum;
}
export declare class CreateGovCloudAccountResponse extends SpeakeasyBase {
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
    createGovCloudAccountResponse?: shared.CreateGovCloudAccountResponse;
    /**
     * FinalizingOrganizationException
     */
    finalizingOrganizationException?: any;
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
    /**
     * UnsupportedAPIEndpointException
     */
    unsupportedAPIEndpointException?: any;
}
