import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateObservabilityConfigurationXAmzTargetEnum {
    AppRunnerCreateObservabilityConfiguration = "AppRunner.CreateObservabilityConfiguration"
}
export declare class CreateObservabilityConfigurationRequest extends SpeakeasyBase {
    createObservabilityConfigurationRequest: shared.CreateObservabilityConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateObservabilityConfigurationXAmzTargetEnum;
}
export declare class CreateObservabilityConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createObservabilityConfigurationResponse?: shared.CreateObservabilityConfigurationResponse;
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
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
}
