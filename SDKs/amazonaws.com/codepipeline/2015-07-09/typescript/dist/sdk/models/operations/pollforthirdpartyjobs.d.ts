import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PollForThirdPartyJobsXAmzTargetEnum {
    CodePipeline20150709PollForThirdPartyJobs = "CodePipeline_20150709.PollForThirdPartyJobs"
}
export declare class PollForThirdPartyJobsRequest extends SpeakeasyBase {
    pollForThirdPartyJobsInput: shared.PollForThirdPartyJobsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PollForThirdPartyJobsXAmzTargetEnum;
}
export declare class PollForThirdPartyJobsResponse extends SpeakeasyBase {
    /**
     * ActionTypeNotFoundException
     */
    actionTypeNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    pollForThirdPartyJobsOutput?: shared.PollForThirdPartyJobsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
