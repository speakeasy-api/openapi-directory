import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteMessageRequestBody extends SpeakeasyBase {
    /**
     * ID of the message to be deleted. This is the <code>Id</code> field in the received message (see <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-message-subscribe.html"> Message (Subscribe)</a> in the Chat Messaging API).
     */
    id: string;
    /**
     * Reason for deleting the message.
     */
    reason?: string;
    /**
     * Identifier of the room where the message should be deleted. Currently this must be an ARN.
     */
    roomIdentifier: string;
}
export declare class DeleteMessageRequest extends SpeakeasyBase {
    requestBody: DeleteMessageRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteMessageResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteMessageResponse?: shared.DeleteMessageResponse;
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
