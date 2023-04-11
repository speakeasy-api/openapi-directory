import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartAppReplicationXAmzTargetEnum {
    AWSServerMigrationServiceV20161024StartAppReplication = "AWSServerMigrationService_V2016_10_24.StartAppReplication"
}
export declare class StartAppReplicationRequest extends SpeakeasyBase {
    startAppReplicationRequest: shared.StartAppReplicationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartAppReplicationXAmzTargetEnum;
}
export declare class StartAppReplicationResponse extends SpeakeasyBase {
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
    startAppReplicationResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}
