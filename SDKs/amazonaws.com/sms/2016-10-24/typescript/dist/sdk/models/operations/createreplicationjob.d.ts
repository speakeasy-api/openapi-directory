import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateReplicationJobXAmzTargetEnum {
    AWSServerMigrationServiceV20161024CreateReplicationJob = "AWSServerMigrationService_V2016_10_24.CreateReplicationJob"
}
export declare class CreateReplicationJobRequest extends SpeakeasyBase {
    createReplicationJobRequest: shared.CreateReplicationJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateReplicationJobXAmzTargetEnum;
}
export declare class CreateReplicationJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createReplicationJobResponse?: shared.CreateReplicationJobResponse;
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
     * NoConnectorsAvailableException
     */
    noConnectorsAvailableException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ReplicationJobAlreadyExistsException
     */
    replicationJobAlreadyExistsException?: any;
    /**
     * ServerCannotBeReplicatedException
     */
    serverCannotBeReplicatedException?: any;
    /**
     * TemporarilyUnavailableException
     */
    temporarilyUnavailableException?: any;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}
