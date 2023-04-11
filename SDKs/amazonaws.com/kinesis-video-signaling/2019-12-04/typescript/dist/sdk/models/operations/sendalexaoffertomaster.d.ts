import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendAlexaOfferToMasterRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the signaling channel by which Alexa and the master peer communicate.
     */
    channelARN: string;
    /**
     * The base64-encoded SDP offer content.
     */
    messagePayload: string;
    /**
     * The unique identifier for the sender client.
     */
    senderClientId: string;
}
export declare class SendAlexaOfferToMasterRequest extends SpeakeasyBase {
    requestBody: SendAlexaOfferToMasterRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SendAlexaOfferToMasterResponse extends SpeakeasyBase {
    /**
     * ClientLimitExceededException
     */
    clientLimitExceededException?: any;
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    sendAlexaOfferToMasterResponse?: shared.SendAlexaOfferToMasterResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
