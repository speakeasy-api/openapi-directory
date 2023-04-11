import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAppValidationConfigurationXAmzTargetEnum {
    AWSServerMigrationServiceV20161024GetAppValidationConfiguration = "AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration"
}
export declare class GetAppValidationConfigurationRequest extends SpeakeasyBase {
    getAppValidationConfigurationRequest: shared.GetAppValidationConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAppValidationConfigurationXAmzTargetEnum;
}
export declare class GetAppValidationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAppValidationConfigurationResponse?: shared.GetAppValidationConfigurationResponse;
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
