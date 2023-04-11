import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateProjectRequestBody extends SpeakeasyBase {
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: string;
    /**
     * The ID of the portal in which to create the project.
     */
    portalId: string;
    /**
     * A description for the project.
     */
    projectDescription?: string;
    /**
     * A friendly name for the project.
     */
    projectName: string;
    /**
     * A list of key-value pairs that contain metadata for the project. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.
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
    createProjectResponse?: shared.CreateProjectResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
}
