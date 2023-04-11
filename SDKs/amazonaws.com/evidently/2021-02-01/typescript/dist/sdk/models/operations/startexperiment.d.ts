import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartExperimentRequestBody extends SpeakeasyBase {
    /**
     * The date and time to end the experiment. This must be no more than 30 days after the experiment starts.
     */
    analysisCompleteTime: Date;
}
export declare class StartExperimentRequest extends SpeakeasyBase {
    requestBody: StartExperimentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the experiment to start.
     */
    experiment: string;
    /**
     * The name or ARN of the project that contains the experiment to start.
     */
    project: string;
}
export declare class StartExperimentResponse extends SpeakeasyBase {
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
    startExperimentResponse?: shared.StartExperimentResponse;
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
