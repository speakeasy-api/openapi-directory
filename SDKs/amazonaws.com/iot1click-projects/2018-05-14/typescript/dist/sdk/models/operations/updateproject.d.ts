import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object defining the template for a placement.
 */
export declare class UpdateProjectRequestBodyPlacementTemplate extends SpeakeasyBase {
    defaultAttributes?: Record<string, string>;
    deviceTemplates?: Record<string, shared.DeviceTemplate>;
}
export declare class UpdateProjectRequestBody extends SpeakeasyBase {
    /**
     * An optional user-defined description for the project.
     */
    description?: string;
    /**
     * An object defining the template for a placement.
     */
    placementTemplate?: UpdateProjectRequestBodyPlacementTemplate;
}
export declare class UpdateProjectRequest extends SpeakeasyBase {
    requestBody: UpdateProjectRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the project to be updated.
     */
    projectName: string;
}
export declare class UpdateProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateProjectResponse?: Record<string, any>;
}
