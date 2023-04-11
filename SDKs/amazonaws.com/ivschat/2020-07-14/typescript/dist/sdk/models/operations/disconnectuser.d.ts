import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisconnectUserRequestBody extends SpeakeasyBase {
    /**
     * Reason for disconnecting the user.
     */
    reason?: string;
    /**
     * Identifier of the room from which the user's clients should be disconnected. Currently this must be an ARN.
     */
    roomIdentifier: string;
    /**
     * ID of the user (connection) to disconnect from the room.
     */
    userId: string;
}
export declare class DisconnectUserRequest extends SpeakeasyBase {
    requestBody: DisconnectUserRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisconnectUserResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    disconnectUserResponse?: Record<string, any>;
    /**
     * PendingVerification
     */
    pendingVerification?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
