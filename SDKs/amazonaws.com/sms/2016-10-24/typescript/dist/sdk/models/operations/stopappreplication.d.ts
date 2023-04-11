import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopAppReplicationXAmzTargetEnum {
    AWSServerMigrationServiceV20161024StopAppReplication = "AWSServerMigrationService_V2016_10_24.StopAppReplication"
}
export declare class StopAppReplicationRequest extends SpeakeasyBase {
    stopAppReplicationRequest: shared.StopAppReplicationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopAppReplicationXAmzTargetEnum;
}
export declare class StopAppReplicationResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopAppReplicationResponse?: Record<string, any>;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}
