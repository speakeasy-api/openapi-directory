import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSecurityConfigurationXAmzTargetEnum {
    AWSGlueGetSecurityConfiguration = "AWSGlue.GetSecurityConfiguration"
}
export declare class GetSecurityConfigurationRequest extends SpeakeasyBase {
    getSecurityConfigurationRequest: shared.GetSecurityConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSecurityConfigurationXAmzTargetEnum;
}
export declare class GetSecurityConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getSecurityConfigurationResponse?: shared.GetSecurityConfigurationResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
