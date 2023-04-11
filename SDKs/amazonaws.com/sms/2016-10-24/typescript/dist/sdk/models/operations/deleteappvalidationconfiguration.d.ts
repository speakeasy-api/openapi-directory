import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAppValidationConfigurationXAmzTargetEnum {
    AWSServerMigrationServiceV20161024DeleteAppValidationConfiguration = "AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration"
}
export declare class DeleteAppValidationConfigurationRequest extends SpeakeasyBase {
    deleteAppValidationConfigurationRequest: shared.DeleteAppValidationConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAppValidationConfigurationXAmzTargetEnum;
}
export declare class DeleteAppValidationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteAppValidationConfigurationResponse?: Record<string, any>;
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
