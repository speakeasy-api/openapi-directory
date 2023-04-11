import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateComponentConfigurationXAmzTargetEnum {
    Ec2WindowsBarleyServiceUpdateComponentConfiguration = "EC2WindowsBarleyService.UpdateComponentConfiguration"
}
export declare class UpdateComponentConfigurationRequest extends SpeakeasyBase {
    updateComponentConfigurationRequest: shared.UpdateComponentConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateComponentConfigurationXAmzTargetEnum;
}
export declare class UpdateComponentConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateComponentConfigurationResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
