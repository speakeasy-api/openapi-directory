import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group.
 */
export declare class UpdateProfilingGroupRequestBodyAgentOrchestrationConfig extends SpeakeasyBase {
    profilingEnabled?: boolean;
}
export declare class UpdateProfilingGroupRequestBody extends SpeakeasyBase {
    /**
     *  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group.
     */
    agentOrchestrationConfig: UpdateProfilingGroupRequestBodyAgentOrchestrationConfig;
}
export declare class UpdateProfilingGroupRequest extends SpeakeasyBase {
    requestBody: UpdateProfilingGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the profiling group to update.
     */
    profilingGroupName: string;
}
export declare class UpdateProfilingGroupResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
    /**
     * Success
     */
    updateProfilingGroupResponse?: shared.UpdateProfilingGroupResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
