import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAutoScalingConfigurationXAmzTargetEnum {
    AppRunnerCreateAutoScalingConfiguration = "AppRunner.CreateAutoScalingConfiguration"
}
export declare class CreateAutoScalingConfigurationRequest extends SpeakeasyBase {
    createAutoScalingConfigurationRequest: shared.CreateAutoScalingConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAutoScalingConfigurationXAmzTargetEnum;
}
export declare class CreateAutoScalingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAutoScalingConfigurationResponse?: shared.CreateAutoScalingConfigurationResponse;
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
