import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteObservabilityConfigurationXAmzTargetEnum {
    AppRunnerDeleteObservabilityConfiguration = "AppRunner.DeleteObservabilityConfiguration"
}
export declare class DeleteObservabilityConfigurationRequest extends SpeakeasyBase {
    deleteObservabilityConfigurationRequest: shared.DeleteObservabilityConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteObservabilityConfigurationXAmzTargetEnum;
}
export declare class DeleteObservabilityConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteObservabilityConfigurationResponse?: shared.DeleteObservabilityConfigurationResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
