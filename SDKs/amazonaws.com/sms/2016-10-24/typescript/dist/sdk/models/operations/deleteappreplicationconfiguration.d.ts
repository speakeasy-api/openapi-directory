import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAppReplicationConfigurationXAmzTargetEnum {
    AWSServerMigrationServiceV20161024DeleteAppReplicationConfiguration = "AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration"
}
export declare class DeleteAppReplicationConfigurationRequest extends SpeakeasyBase {
    deleteAppReplicationConfigurationRequest: shared.DeleteAppReplicationConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAppReplicationConfigurationXAmzTargetEnum;
}
export declare class DeleteAppReplicationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteAppReplicationConfigurationResponse?: Record<string, any>;
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
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}
