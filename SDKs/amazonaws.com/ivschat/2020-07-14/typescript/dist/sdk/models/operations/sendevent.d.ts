import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendEventRequestBody extends SpeakeasyBase {
    /**
     * Application-defined metadata to attach to the event sent to clients. The maximum length of the metadata is 1 KB total.
     */
    attributes?: Record<string, string>;
    /**
     * Application-defined name of the event to send to clients.
     */
    eventName: string;
    /**
     * Identifier of the room to which the event will be sent. Currently this must be an ARN.
     */
    roomIdentifier: string;
}
export declare class SendEventRequest extends SpeakeasyBase {
    requestBody: SendEventRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SendEventResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * PendingVerification
     */
    pendingVerification?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    sendEventResponse?: shared.SendEventResponse;
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
