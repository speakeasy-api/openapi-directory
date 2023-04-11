import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateReplicationJobXAmzTargetEnum {
    AWSServerMigrationServiceV20161024UpdateReplicationJob = "AWSServerMigrationService_V2016_10_24.UpdateReplicationJob"
}
export declare class UpdateReplicationJobRequest extends SpeakeasyBase {
    updateReplicationJobRequest: shared.UpdateReplicationJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateReplicationJobXAmzTargetEnum;
}
export declare class UpdateReplicationJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalError
     */
    internalError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MissingRequiredParameterException
     */
    missingRequiredParameterException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * ReplicationJobNotFoundException
     */
    replicationJobNotFoundException?: any;
    /**
     * ServerCannotBeReplicatedException
     */
    serverCannotBeReplicatedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TemporarilyUnavailableException
     */
    temporarilyUnavailableException?: any;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
    /**
     * Success
     */
    updateReplicationJobResponse?: Record<string, any>;
}
