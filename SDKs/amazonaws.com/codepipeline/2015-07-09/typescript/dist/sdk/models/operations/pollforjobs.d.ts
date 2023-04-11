import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PollForJobsXAmzTargetEnum {
    CodePipeline20150709PollForJobs = "CodePipeline_20150709.PollForJobs"
}
export declare class PollForJobsRequest extends SpeakeasyBase {
    pollForJobsInput: shared.PollForJobsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PollForJobsXAmzTargetEnum;
}
export declare class PollForJobsResponse extends SpeakeasyBase {
    /**
     * ActionTypeNotFoundException
     */
    actionTypeNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    pollForJobsOutput?: shared.PollForJobsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
