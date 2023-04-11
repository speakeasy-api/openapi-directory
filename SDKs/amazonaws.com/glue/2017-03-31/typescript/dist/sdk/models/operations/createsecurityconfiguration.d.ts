import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSecurityConfigurationXAmzTargetEnum {
    AWSGlueCreateSecurityConfiguration = "AWSGlue.CreateSecurityConfiguration"
}
export declare class CreateSecurityConfigurationRequest extends SpeakeasyBase {
    createSecurityConfigurationRequest: shared.CreateSecurityConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSecurityConfigurationXAmzTargetEnum;
}
export declare class CreateSecurityConfigurationResponse extends SpeakeasyBase {
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
    contentType: string;
    /**
     * Success
     */
    createSecurityConfigurationResponse?: shared.CreateSecurityConfigurationResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    /**
     * ResourceNumberLimitExceededException
     */
    resourceNumberLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
