import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSecurityConfigurationXAmzTargetEnum {
    AWSGlueDeleteSecurityConfiguration = "AWSGlue.DeleteSecurityConfiguration"
}
export declare class DeleteSecurityConfigurationRequest extends SpeakeasyBase {
    deleteSecurityConfigurationRequest: shared.DeleteSecurityConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSecurityConfigurationXAmzTargetEnum;
}
export declare class DeleteSecurityConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteSecurityConfigurationResponse?: Record<string, any>;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
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
