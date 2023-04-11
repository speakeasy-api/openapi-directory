import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelHandshakeXAmzTargetEnum {
    AWSOrganizationsV20161128CancelHandshake = "AWSOrganizationsV20161128.CancelHandshake"
}
export declare class CancelHandshakeRequest extends SpeakeasyBase {
    cancelHandshakeRequest: shared.CancelHandshakeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelHandshakeXAmzTargetEnum;
}
export declare class CancelHandshakeResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    cancelHandshakeResponse?: shared.CancelHandshakeResponse;
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
