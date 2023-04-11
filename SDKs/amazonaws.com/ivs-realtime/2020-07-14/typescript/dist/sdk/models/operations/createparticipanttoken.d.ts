import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateParticipantTokenRequestBody extends SpeakeasyBase {
    /**
     * Application-provided attributes to encode into the token and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. <i>This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.</i>
     */
    attributes?: Record<string, string>;
    /**
     * Set of capabilities that the user is allowed to perform in the stage. Default: <code>PUBLISH, SUBSCRIBE</code>.
     */
    capabilities?: shared.ParticipantTokenCapabilityEnum[];
    /**
     * Duration (in minutes), after which the token expires. Default: 60 (1 hour).
     */
    duration?: number;
    /**
     * ARN of the stage to which this token is scoped.
     */
    stageArn: string;
    /**
     * Name that can be specified to help identify the token. This can be any UTF-8 encoded text. <i>This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.</i>
     */
    userId?: string;
}
export declare class CreateParticipantTokenRequest extends SpeakeasyBase {
    requestBody: CreateParticipantTokenRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateParticipantTokenResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createParticipantTokenResponse?: shared.CreateParticipantTokenResponse;
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
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
