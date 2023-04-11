import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteReplicationJobXAmzTargetEnum {
    AWSServerMigrationServiceV20161024DeleteReplicationJob = "AWSServerMigrationService_V2016_10_24.DeleteReplicationJob"
}
export declare class DeleteReplicationJobRequest extends SpeakeasyBase {
    deleteReplicationJobRequest: shared.DeleteReplicationJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteReplicationJobXAmzTargetEnum;
}
export declare class DeleteReplicationJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteReplicationJobResponse?: Record<string, any>;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ReplicationJobNotFoundException
     */
    replicationJobNotFoundException?: any;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}
