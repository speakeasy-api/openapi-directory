import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSceneRequestBody extends SpeakeasyBase {
    /**
     * A list of capabilities that the scene uses to render itself.
     */
    capabilities?: string[];
    /**
     * The relative path that specifies the location of the content definition file.
     */
    contentLocation: string;
    /**
     * The description for this scene.
     */
    description?: string;
    /**
     * The ID of the scene.
     */
    sceneId: string;
    /**
     * The request metadata.
     */
    sceneMetadata?: Record<string, string>;
    /**
     * Metadata that you can use to manage the scene.
     */
    tags?: Record<string, string>;
}
export declare class CreateSceneRequest extends SpeakeasyBase {
    requestBody: CreateSceneRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the workspace that contains the scene.
     */
    workspaceId: string;
}
export declare class CreateSceneResponse extends SpeakeasyBase {
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
    createSceneResponse?: shared.CreateSceneResponse;
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
