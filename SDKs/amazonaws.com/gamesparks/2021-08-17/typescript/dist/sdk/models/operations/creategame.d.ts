import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateGameRequestBody extends SpeakeasyBase {
    /**
     *  A client-defined token. With an active client token in the request, this action is idempotent.
     */
    clientToken?: string;
    /**
     * The description of the game.
     */
    description?: string;
    /**
     * The name of the game.
     */
    gameName: string;
    /**
     * The list of tags to apply to the game.
     */
    tags?: Record<string, string>;
}
export declare class CreateGameRequest extends SpeakeasyBase {
    requestBody: CreateGameRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateGameResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createGameResult?: shared.CreateGameResult;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
