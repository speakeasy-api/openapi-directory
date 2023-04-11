import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The state of the user's session with Amazon Lex V2.
 */
export declare class PutSessionRequestBodySessionState extends SpeakeasyBase {
    activeContexts?: shared.ActiveContext[];
    dialogAction?: shared.DialogAction;
    intent?: shared.Intent;
    originatingRequestId?: string;
    runtimeHints?: shared.RuntimeHints;
    sessionAttributes?: Record<string, string>;
}
export declare class PutSessionRequestBody extends SpeakeasyBase {
    /**
     * A list of messages to send to the user. Messages are sent in the order that they are defined in the list.
     */
    messages?: shared.Message[];
    /**
     * <p>Request-specific information passed between Amazon Lex V2 and the client application.</p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p>
     */
    requestAttributes?: Record<string, string>;
    /**
     * The state of the user's session with Amazon Lex V2.
     */
    sessionState: PutSessionRequestBodySessionState;
}
export declare class PutSessionRequest extends SpeakeasyBase {
    requestBody: PutSessionRequestBody;
    /**
     * <p>The message that Amazon Lex V2 returns in the response can be either text or speech depending on the value of this parameter. </p> <ul> <li> <p>If the value is <code>text/plain; charset=utf-8</code>, Amazon Lex V2 returns text in the response.</p> </li> </ul>
     */
    responseContentType?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The alias identifier of the bot that receives the session data.
     */
    botAliasId: string;
    /**
     * The identifier of the bot that receives the session data.
     */
    botId: string;
    /**
     * The locale where the session is in use.
     */
    localeId: string;
    /**
     * The identifier of the session that receives the session data.
     */
    sessionId: string;
}
export declare class PutSessionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadGatewayException
     */
    badGatewayException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * DependencyFailedException
     */
    dependencyFailedException?: any;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    putSessionResponse?: shared.PutSessionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
