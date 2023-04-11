import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Aggregate status of Agent components.
 */
export declare class UpdateAgentStatusRequestBodyAggregateStatus extends SpeakeasyBase {
    signatureMap?: Record<string, boolean>;
    status?: shared.AgentStatusEnum;
}
export declare class UpdateAgentStatusRequestBody extends SpeakeasyBase {
    /**
     * Aggregate status of Agent components.
     */
    aggregateStatus: UpdateAgentStatusRequestBodyAggregateStatus;
    /**
     * List of component statuses for agent.
     */
    componentStatuses: shared.ComponentStatusData[];
    /**
     * GUID of agent task.
     */
    taskId: string;
}
export declare class UpdateAgentStatusRequest extends SpeakeasyBase {
    requestBody: UpdateAgentStatusRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * UUID of agent to update.
     */
    agentId: string;
}
export declare class UpdateAgentStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyException
     */
    dependencyException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateAgentStatusResponse?: shared.UpdateAgentStatusResponse;
}
