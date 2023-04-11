import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAppReplicationConfigurationXAmzTargetEnum {
    AWSServerMigrationServiceV20161024GetAppReplicationConfiguration = "AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration"
}
export declare class GetAppReplicationConfigurationRequest extends SpeakeasyBase {
    getAppReplicationConfigurationRequest: shared.GetAppReplicationConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAppReplicationConfigurationXAmzTargetEnum;
}
export declare class GetAppReplicationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAppReplicationConfigurationResponse?: shared.GetAppReplicationConfigurationResponse;
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
