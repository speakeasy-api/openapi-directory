import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateReplicationConfigurationRequestBody extends SpeakeasyBase {
    /**
     * An array of destination configuration objects. Only one destination configuration object is supported.
     */
    destinations: shared.DestinationToCreate[];
}
export declare class CreateReplicationConfigurationRequest extends SpeakeasyBase {
    requestBody: CreateReplicationConfigurationRequestBody;
    /**
     * Specifies the Amazon EFS file system that you want to replicate. This file system cannot already be a source or destination file system in another replication configuration.
     */
    sourceFileSystemId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateReplicationConfigurationResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * FileSystemLimitExceeded
     */
    fileSystemLimitExceeded?: any;
    /**
     * FileSystemNotFound
     */
    fileSystemNotFound?: any;
    /**
     * IncorrectFileSystemLifeCycleState
     */
    incorrectFileSystemLifeCycleState?: any;
    /**
     * InsufficientThroughputCapacity
     */
    insufficientThroughputCapacity?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    replicationConfigurationDescription?: shared.ReplicationConfigurationDescription;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ReplicationNotFound
     */
    replicationNotFound?: any;
    /**
     * ThroughputLimitExceeded
     */
    throughputLimitExceeded?: any;
    /**
     * UnsupportedAvailabilityZone
     */
    unsupportedAvailabilityZone?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
