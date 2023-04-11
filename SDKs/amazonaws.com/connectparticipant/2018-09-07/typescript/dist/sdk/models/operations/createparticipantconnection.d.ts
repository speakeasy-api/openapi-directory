import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateParticipantConnectionRequestBody extends SpeakeasyBase {
    /**
     * Amazon Connect Participant is used to mark the participant as connected for customer participant in message streaming, as well as for agent or manager participant in non-streaming chats.
     */
    connectParticipant?: boolean;
    /**
     * Type of connection information required. This can be omitted if <code>ConnectParticipant</code> is <code>true</code>.
     */
    type?: shared.ConnectionTypeEnum[];
}
export declare class CreateParticipantConnectionRequest extends SpeakeasyBase {
    requestBody: CreateParticipantConnectionRequestBody;
    xAmzAlgorithm?: string;
    /**
     * <p>This is a header parameter.</p> <p>The ParticipantToken as obtained from <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html">StartChatContact</a> API response.</p>
     */
    xAmzBearer: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateParticipantConnectionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createParticipantConnectionResponse?: shared.CreateParticipantConnectionResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
