import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The state of the user's session with Amazon Lex V2.
 */
export declare class RecognizeTextRequestBodySessionState extends SpeakeasyBase {
    activeContexts?: shared.ActiveContext[];
    dialogAction?: shared.DialogAction;
    intent?: shared.Intent;
    originatingRequestId?: string;
    runtimeHints?: shared.RuntimeHints;
    sessionAttributes?: Record<string, string>;
}
export declare class RecognizeTextRequestBody extends SpeakeasyBase {
    /**
     * <p>Request-specific information passed between the client application and Amazon Lex V2 </p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p>
     */
    requestAttributes?: Record<string, string>;
    /**
     * The state of the user's session with Amazon Lex V2.
     */
    sessionState?: RecognizeTextRequestBodySessionState;
    /**
     * The text that the user entered. Amazon Lex V2 interprets this text.
     */
    text: string;
}
export declare class RecognizeTextRequest extends SpeakeasyBase {
    requestBody: RecognizeTextRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The alias identifier in use for the bot that processes the request.
     */
    botAliasId: string;
    /**
     * The identifier of the bot that processes the request.
     */
    botId: string;
    /**
     * The locale where the session is in use.
     */
    localeId: string;
    /**
     * The identifier of the user session that is having the conversation.
     */
    sessionId: string;
}
export declare class RecognizeTextResponse extends SpeakeasyBase {
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
    recognizeTextResponse?: shared.RecognizeTextResponse;
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
