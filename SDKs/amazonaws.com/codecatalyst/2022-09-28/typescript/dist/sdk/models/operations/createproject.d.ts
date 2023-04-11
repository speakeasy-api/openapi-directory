import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateProjectRequestBody extends SpeakeasyBase {
    /**
     * The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose.
     */
    description?: string;
    /**
     * The friendly name of the project that will be displayed to users.
     */
    displayName: string;
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    requestBody: CreateProjectRequestBody;
    /**
     * The name of the space.
     */
    spaceName: string;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
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
    createProjectResponse?: shared.CreateProjectResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
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
