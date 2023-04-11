import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateStageRequestBody extends SpeakeasyBase {
    /**
     * The description of the stage.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the role to use for the game snapshots deployed to this stage.
     */
    role?: string;
}
export declare class UpdateStageRequest extends SpeakeasyBase {
    /**
     * The name of the game.
     */
    gameName: string;
    requestBody: UpdateStageRequestBody;
    /**
     * The name of the stage.
     */
    stageName: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateStageResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
     * Success
     */
    updateStageResult?: shared.UpdateStageResult;
    /**
     * ValidationException
     */
    validationException?: any;
}
