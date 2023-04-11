import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartOnDemandReplicationRunXAmzTargetEnum {
    AWSServerMigrationServiceV20161024StartOnDemandReplicationRun = "AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun"
}
export declare class StartOnDemandReplicationRunRequest extends SpeakeasyBase {
    startOnDemandReplicationRunRequest: shared.StartOnDemandReplicationRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartOnDemandReplicationRunXAmzTargetEnum;
}
export declare class StartOnDemandReplicationRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DryRunOperationException
     */
    dryRunOperationException?: any;
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
     * ReplicationRunLimitExceededException
     */
    replicationRunLimitExceededException?: any;
    /**
     * Success
     */
    startOnDemandReplicationRunResponse?: shared.StartOnDemandReplicationRunResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}
