import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Describes the type for the job. The job type <code>RELEASE</code> starts a new job with the latest change from the specified branch. This value is available only for apps that are connected to a repository. The job type <code>RETRY</code> retries an existing job. If the job type value is <code>RETRY</code>, the <code>jobId</code> is also required.
 */
export declare enum StartJobRequestBodyJobTypeEnum {
    Release = "RELEASE",
    Retry = "RETRY",
    Manual = "MANUAL",
    WebHook = "WEB_HOOK"
}
export declare class StartJobRequestBody extends SpeakeasyBase {
    /**
     *  The commit ID from a third-party repository provider for the job.
     */
    commitId?: string;
    /**
     *  The commit message from a third-party repository provider for the job.
     */
    commitMessage?: string;
    /**
     *  The commit date and time for the job.
     */
    commitTime?: Date;
    /**
     *  The unique ID for an existing job. This is required if the value of <code>jobType</code> is <code>RETRY</code>.
     */
    jobId?: string;
    /**
     *  A descriptive reason for starting this job.
     */
    jobReason?: string;
    /**
     *  Describes the type for the job. The job type <code>RELEASE</code> starts a new job with the latest change from the specified branch. This value is available only for apps that are connected to a repository. The job type <code>RETRY</code> retries an existing job. If the job type value is <code>RETRY</code>, the <code>jobId</code> is also required.
     */
    jobType: StartJobRequestBodyJobTypeEnum;
}
export declare class StartJobRequest extends SpeakeasyBase {
    requestBody: StartJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The unique ID for an Amplify app.
     */
    appId: string;
    /**
     *  The branch name for the job.
     */
    branchName: string;
}
export declare class StartJobResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * Success
     */
    startJobResult?: shared.StartJobResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
