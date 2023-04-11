import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AcceptHandshakeXAmzTargetEnum {
    AWSOrganizationsV20161128AcceptHandshake = "AWSOrganizationsV20161128.AcceptHandshake"
}
export declare class AcceptHandshakeRequest extends SpeakeasyBase {
    acceptHandshakeRequest: shared.AcceptHandshakeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptHandshakeXAmzTargetEnum;
}
export declare class AcceptHandshakeResponse extends SpeakeasyBase {
    /**
     * AWSOrganizationsNotInUseException
     */
    awsOrganizationsNotInUseException?: any;
    /**
     * Success
     */
    acceptHandshakeResponse?: shared.AcceptHandshakeResponse;
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccessDeniedForDependencyException
     */
    accessDeniedForDependencyException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * HandshakeAlreadyInStateException
     */
    handshakeAlreadyInStateException?: any;
    /**
     * HandshakeConstraintViolationException
     */
    handshakeConstraintViolationException?: any;
    /**
     * HandshakeNotFoundException
     */
    handshakeNotFoundException?: any;
    /**
     * InvalidHandshakeTransitionException
     */
    invalidHandshakeTransitionException?: any;
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
}
