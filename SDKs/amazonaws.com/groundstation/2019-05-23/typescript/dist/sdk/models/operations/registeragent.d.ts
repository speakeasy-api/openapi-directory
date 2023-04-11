import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Detailed information about the agent.
 */
export declare class RegisterAgentRequestBodyAgentDetails extends SpeakeasyBase {
    agentVersion?: string;
    componentVersions?: shared.ComponentVersion[];
    instanceId?: string;
    instanceType?: string;
    reservedCpuCores?: number[];
}
/**
 * Data for agent discovery.
 */
export declare class RegisterAgentRequestBodyDiscoveryData extends SpeakeasyBase {
    capabilityArns?: string[];
    privateIpAddresses?: string[];
    publicIpAddresses?: string[];
}
export declare class RegisterAgentRequestBody extends SpeakeasyBase {
    /**
     * Detailed information about the agent.
     */
    agentDetails: RegisterAgentRequestBodyAgentDetails;
    /**
     * Data for agent discovery.
     */
    discoveryData: RegisterAgentRequestBodyDiscoveryData;
}
export declare class RegisterAgentRequest extends SpeakeasyBase {
    requestBody: RegisterAgentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RegisterAgentResponse extends SpeakeasyBase {
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
     * Success
     */
    registerAgentResponse?: shared.RegisterAgentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
