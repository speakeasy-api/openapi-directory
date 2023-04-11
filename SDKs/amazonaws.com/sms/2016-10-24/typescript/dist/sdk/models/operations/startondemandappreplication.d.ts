import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartOnDemandAppReplicationXAmzTargetEnum {
    AWSServerMigrationServiceV20161024StartOnDemandAppReplication = "AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication"
}
export declare class StartOnDemandAppReplicationRequest extends SpeakeasyBase {
    startOnDemandAppReplicationRequest: shared.StartOnDemandAppReplicationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartOnDemandAppReplicationXAmzTargetEnum;
}
export declare class StartOnDemandAppReplicationResponse extends SpeakeasyBase {
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
     * Success
     */
    startOnDemandAppReplicationResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}
