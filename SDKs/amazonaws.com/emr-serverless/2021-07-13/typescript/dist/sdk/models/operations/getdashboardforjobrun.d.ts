import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDashboardForJobRunRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the application.
     */
    applicationId: string;
    /**
     * The ID of the job run.
     */
    jobRunId: string;
}
export declare class GetDashboardForJobRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDashboardForJobRunResponse?: shared.GetDashboardForJobRunResponse;
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
     * ValidationException
     */
    validationException?: any;
}
