import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSceneRequestBody extends SpeakeasyBase {
    /**
     * A list of capabilities that the scene uses to render.
     */
    capabilities?: string[];
    /**
     * The relative path that specifies the location of the content definition file.
     */
    contentLocation?: string;
    /**
     * The description of this scene.
     */
    description?: string;
    /**
     * The scene metadata.
     */
    sceneMetadata?: Record<string, string>;
}
export declare class UpdateSceneRequest extends SpeakeasyBase {
    requestBody: UpdateSceneRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the scene.
     */
    sceneId: string;
    /**
     * The ID of the workspace that contains the scene.
     */
    workspaceId: string;
}
export declare class UpdateSceneResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
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
     * Success
     */
    updateSceneResponse?: shared.UpdateSceneResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
