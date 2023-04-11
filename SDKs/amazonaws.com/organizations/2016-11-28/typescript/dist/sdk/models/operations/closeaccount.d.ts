import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CloseAccountXAmzTargetEnum {
    AWSOrganizationsV20161128CloseAccount = "AWSOrganizationsV20161128.CloseAccount"
}
export declare class CloseAccountRequest extends SpeakeasyBase {
    closeAccountRequest: shared.CloseAccountRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CloseAccountXAmzTargetEnum;
}
export declare class CloseAccountResponse extends SpeakeasyBase {
    /**
     * AWSOrganizationsNotInUseException
     */
    awsOrganizationsNotInUseException?: any;
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountAlreadyClosedException
     */
    accountAlreadyClosedException?: any;
    /**
     * AccountNotFoundException
     */
    accountNotFoundException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    /**
     * ConstraintViolationException
     */
    constraintViolationException?: any;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
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
