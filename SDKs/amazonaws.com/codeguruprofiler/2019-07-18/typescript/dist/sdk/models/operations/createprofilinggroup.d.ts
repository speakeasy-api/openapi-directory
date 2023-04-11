import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group.
 */
export declare class CreateProfilingGroupRequestBodyAgentOrchestrationConfig extends SpeakeasyBase {
    profilingEnabled?: boolean;
}
/**
 *  The compute platform of the profiling group. Use <code>AWSLambda</code> if your application runs on AWS Lambda. Use <code>Default</code> if your application runs on a compute platform that is not AWS Lambda, such an Amazon EC2 instance, an on-premises server, or a different platform. If not specified, <code>Default</code> is used.
 */
export declare enum CreateProfilingGroupRequestBodyComputePlatformEnum {
    Default = "Default",
    AWSLambda = "AWSLambda"
}
export declare class CreateProfilingGroupRequestBody extends SpeakeasyBase {
    /**
     *  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group.
     */
    agentOrchestrationConfig?: CreateProfilingGroupRequestBodyAgentOrchestrationConfig;
    /**
     *  The compute platform of the profiling group. Use <code>AWSLambda</code> if your application runs on AWS Lambda. Use <code>Default</code> if your application runs on a compute platform that is not AWS Lambda, such an Amazon EC2 instance, an on-premises server, or a different platform. If not specified, <code>Default</code> is used.
     */
    computePlatform?: CreateProfilingGroupRequestBodyComputePlatformEnum;
    /**
     * The name of the profiling group to create.
     */
    profilingGroupName: string;
    /**
     *  A list of tags to add to the created profiling group.
     */
    tags?: Record<string, string>;
}
export declare class CreateProfilingGroupRequest extends SpeakeasyBase {
    requestBody: CreateProfilingGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  Amazon CodeGuru Profiler uses this universally unique identifier (UUID) to prevent the accidental creation of duplicate profiling groups if there are failures and retries.
     */
    clientToken: string;
}
export declare class CreateProfilingGroupResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createProfilingGroupResponse?: shared.CreateProfilingGroupResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
