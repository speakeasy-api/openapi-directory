import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateReplicationInstanceXAmzTargetEnum {
    AmazonDMSv20160101CreateReplicationInstance = "AmazonDMSv20160101.CreateReplicationInstance"
}
export declare class CreateReplicationInstanceRequest extends SpeakeasyBase {
    createReplicationInstanceMessage: shared.CreateReplicationInstanceMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateReplicationInstanceXAmzTargetEnum;
}
export declare class CreateReplicationInstanceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    contentType: string;
    /**
     * Success
     */
    createReplicationInstanceResponse?: shared.CreateReplicationInstanceResponse;
    /**
     * InsufficientResourceCapacityFault
     */
    insufficientResourceCapacityFault?: any;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * InvalidSubnet
     */
    invalidSubnet?: any;
    /**
     * KMSKeyNotAccessibleFault
     */
    kmsKeyNotAccessibleFault?: any;
    /**
     * ReplicationSubnetGroupDoesNotCoverEnoughAZs
     */
    replicationSubnetGroupDoesNotCoverEnoughAZs?: any;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsFault
     */
    resourceAlreadyExistsFault?: any;
    /**
     * ResourceQuotaExceededFault
     */
    resourceQuotaExceededFault?: any;
    /**
     * StorageQuotaExceededFault
     */
    storageQuotaExceededFault?: any;
}
