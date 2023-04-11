import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object defining the template for a placement.
 */
export declare class CreateProjectRequestBodyPlacementTemplate extends SpeakeasyBase {
    defaultAttributes?: Record<string, string>;
    deviceTemplates?: Record<string, shared.DeviceTemplate>;
}
export declare class CreateProjectRequestBody extends SpeakeasyBase {
    /**
     * An optional description for the project.
     */
    description?: string;
    /**
     * An object defining the template for a placement.
     */
    placementTemplate?: CreateProjectRequestBodyPlacementTemplate;
    /**
     * The name of the project to create.
     */
    projectName: string;
    /**
     * Optional tags (metadata key/value pairs) to be associated with the project. For example, <code>{ {"key1": "value1", "key2": "value2"} }</code>. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.
     */
    tags?: Record<string, string>;
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    requestBody: CreateProjectRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createProjectResponse?: Record<string, any>;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
}
