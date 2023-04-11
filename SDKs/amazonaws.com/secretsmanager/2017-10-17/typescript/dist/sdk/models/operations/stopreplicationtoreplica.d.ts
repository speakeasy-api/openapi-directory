import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopReplicationToReplicaXAmzTargetEnum {
    SecretsmanagerStopReplicationToReplica = "secretsmanager.StopReplicationToReplica"
}
export declare class StopReplicationToReplicaRequest extends SpeakeasyBase {
    stopReplicationToReplicaRequest: shared.StopReplicationToReplicaRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopReplicationToReplicaXAmzTargetEnum;
}
export declare class StopReplicationToReplicaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    stopReplicationToReplicaResponse?: shared.StopReplicationToReplicaResponse;
}
