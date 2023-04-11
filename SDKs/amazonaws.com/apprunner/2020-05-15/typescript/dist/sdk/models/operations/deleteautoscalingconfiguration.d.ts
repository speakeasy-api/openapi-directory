import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAutoScalingConfigurationXAmzTargetEnum {
    AppRunnerDeleteAutoScalingConfiguration = "AppRunner.DeleteAutoScalingConfiguration"
}
export declare class DeleteAutoScalingConfigurationRequest extends SpeakeasyBase {
    deleteAutoScalingConfigurationRequest: shared.DeleteAutoScalingConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAutoScalingConfigurationXAmzTargetEnum;
}
export declare class DeleteAutoScalingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteAutoScalingConfigurationResponse?: shared.DeleteAutoScalingConfigurationResponse;
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
