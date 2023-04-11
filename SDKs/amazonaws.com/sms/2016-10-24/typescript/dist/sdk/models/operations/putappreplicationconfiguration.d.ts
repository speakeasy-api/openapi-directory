import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutAppReplicationConfigurationXAmzTargetEnum {
    AWSServerMigrationServiceV20161024PutAppReplicationConfiguration = "AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration"
}
export declare class PutAppReplicationConfigurationRequest extends SpeakeasyBase {
    putAppReplicationConfigurationRequest: shared.PutAppReplicationConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAppReplicationConfigurationXAmzTargetEnum;
}
export declare class PutAppReplicationConfigurationResponse extends SpeakeasyBase {
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
    putAppReplicationConfigurationResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}
