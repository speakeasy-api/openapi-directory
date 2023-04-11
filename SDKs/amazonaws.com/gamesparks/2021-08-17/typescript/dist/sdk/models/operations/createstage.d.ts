import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateStageRequestBody extends SpeakeasyBase {
    /**
     *  A client-defined token. With an active client token in the request, this action is idempotent.
     */
    clientToken?: string;
    /**
     * The description of the stage.
     */
    description?: string;
    /**
     *  The Amazon Resource Name (ARN) of the role to run the game with. This role can be a game-defined role or the default role that GameSparks created.
     */
    role: string;
    /**
     * The name of the stage.
     */
    stageName: string;
    /**
     * The list of tags to apply to the stage.
     */
    tags?: Record<string, string>;
}
export declare class CreateStageRequest extends SpeakeasyBase {
    /**
     * The name of the game.
     */
    gameName: string;
    requestBody: CreateStageRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStageResponse extends SpeakeasyBase {
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
    createStageResult?: shared.CreateStageResult;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
