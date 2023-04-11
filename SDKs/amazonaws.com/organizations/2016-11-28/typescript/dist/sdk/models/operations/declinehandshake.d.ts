import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeclineHandshakeXAmzTargetEnum {
    AWSOrganizationsV20161128DeclineHandshake = "AWSOrganizationsV20161128.DeclineHandshake"
}
export declare class DeclineHandshakeRequest extends SpeakeasyBase {
    declineHandshakeRequest: shared.DeclineHandshakeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeclineHandshakeXAmzTargetEnum;
}
export declare class DeclineHandshakeResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    declineHandshakeResponse?: shared.DeclineHandshakeResponse;
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
