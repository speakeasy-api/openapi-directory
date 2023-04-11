import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisconnectParticipantRequestBody extends SpeakeasyBase {
    /**
     * Identifier of the participant to be disconnected. This is returned by <a>CreateParticipantToken</a>.
     */
    participantId: string;
    /**
     * Description of why this participant is being disconnected.
     */
    reason?: string;
    /**
     * ARN of the stage to which the participant is attached.
     */
    stageArn: string;
}
export declare class DisconnectParticipantRequest extends SpeakeasyBase {
    requestBody: DisconnectParticipantRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisconnectParticipantResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    disconnectParticipantResponse?: Record<string, any>;
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
     * ValidationException
     */
    validationException?: any;
}
