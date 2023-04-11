import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateFailbackReplicationConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps.
     */
    bandwidthThrottling?: number;
    /**
     * The name of the Failback Replication Configuration.
     */
    name?: string;
    /**
     * The ID of the Recovery Instance.
     */
    recoveryInstanceID: string;
    /**
     * Whether to use Private IP for the failback replication of the Recovery Instance.
     */
    usePrivateIP?: boolean;
}
export declare class UpdateFailbackReplicationConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateFailbackReplicationConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFailbackReplicationConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
}
