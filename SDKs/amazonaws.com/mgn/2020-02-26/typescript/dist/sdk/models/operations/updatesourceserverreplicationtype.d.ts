import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Replication type to which to update source server.
 */
export declare enum UpdateSourceServerReplicationTypeRequestBodyReplicationTypeEnum {
    AgentBased = "AGENT_BASED",
    SnapshotShipping = "SNAPSHOT_SHIPPING"
}
export declare class UpdateSourceServerReplicationTypeRequestBody extends SpeakeasyBase {
    /**
     * Replication type to which to update source server.
     */
    replicationType: UpdateSourceServerReplicationTypeRequestBodyReplicationTypeEnum;
    /**
     * ID of source server on which to update replication type.
     */
    sourceServerID: string;
}
export declare class UpdateSourceServerReplicationTypeRequest extends SpeakeasyBase {
    requestBody: UpdateSourceServerReplicationTypeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateSourceServerReplicationTypeResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    sourceServer?: shared.SourceServer;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
