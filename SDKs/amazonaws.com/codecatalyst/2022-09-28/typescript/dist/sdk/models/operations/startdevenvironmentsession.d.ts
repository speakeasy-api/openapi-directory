import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about the configuration of a Dev Environment session.
 */
export declare class StartDevEnvironmentSessionRequestBodySessionConfiguration extends SpeakeasyBase {
    executeCommandSessionConfiguration?: shared.ExecuteCommandSessionConfiguration;
    sessionType?: shared.DevEnvironmentSessionTypeEnum;
}
export declare class StartDevEnvironmentSessionRequestBody extends SpeakeasyBase {
    /**
     * Information about the configuration of a Dev Environment session.
     */
    sessionConfiguration: StartDevEnvironmentSessionRequestBodySessionConfiguration;
}
export declare class StartDevEnvironmentSessionRequest extends SpeakeasyBase {
    requestBody: StartDevEnvironmentSessionRequestBody;
    /**
     * The system-generated unique ID of the Dev Environment.
     */
    id: string;
    /**
     * The name of the project in the space.
     */
    projectName: string;
    /**
     * The name of the space.
     */
    spaceName: string;
}
export declare class StartDevEnvironmentSessionResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    startDevEnvironmentSessionResponse?: shared.StartDevEnvironmentSessionResponse;
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
