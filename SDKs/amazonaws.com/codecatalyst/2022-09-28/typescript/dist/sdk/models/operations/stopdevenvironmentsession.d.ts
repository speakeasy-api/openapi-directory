import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopDevEnvironmentSessionRequest extends SpeakeasyBase {
    /**
     * The system-generated unique ID of the Dev Environment. To obtain this ID, use <a>ListDevEnvironments</a>.
     */
    id: string;
    /**
     * The name of the project in the space.
     */
    projectName: string;
    /**
     * The system-generated unique ID of the Dev Environment session. This ID is returned by <a>StartDevEnvironmentSession</a>.
     */
    sessionId: string;
    /**
     * The name of the space.
     */
    spaceName: string;
}
export declare class StopDevEnvironmentSessionResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    stopDevEnvironmentSessionResponse?: shared.StopDevEnvironmentSessionResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
