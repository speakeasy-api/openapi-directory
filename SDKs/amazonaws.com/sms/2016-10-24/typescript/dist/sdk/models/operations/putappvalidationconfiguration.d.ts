import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutAppValidationConfigurationXAmzTargetEnum {
    AWSServerMigrationServiceV20161024PutAppValidationConfiguration = "AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration"
}
export declare class PutAppValidationConfigurationRequest extends SpeakeasyBase {
    putAppValidationConfigurationRequest: shared.PutAppValidationConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAppValidationConfigurationXAmzTargetEnum;
}
export declare class PutAppValidationConfigurationResponse extends SpeakeasyBase {
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
    putAppValidationConfigurationResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}
