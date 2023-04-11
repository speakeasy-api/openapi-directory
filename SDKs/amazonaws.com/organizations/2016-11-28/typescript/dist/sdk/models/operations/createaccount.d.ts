import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAccountXAmzTargetEnum {
    AWSOrganizationsV20161128CreateAccount = "AWSOrganizationsV20161128.CreateAccount"
}
export declare class CreateAccountRequest extends SpeakeasyBase {
    createAccountRequest: shared.CreateAccountRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAccountXAmzTargetEnum;
}
export declare class CreateAccountResponse extends SpeakeasyBase {
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
    createAccountResponse?: shared.CreateAccountResponse;
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
