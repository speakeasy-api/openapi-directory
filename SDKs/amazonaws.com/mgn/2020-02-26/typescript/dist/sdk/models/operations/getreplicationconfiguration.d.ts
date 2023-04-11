import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReplicationConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Request to get Replication Configuration by Source Server ID.
     */
    sourceServerID: string;
}
export declare class GetReplicationConfigurationRequest extends SpeakeasyBase {
    requestBody: GetReplicationConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetReplicationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    replicationConfiguration?: shared.ReplicationConfiguration;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
}
