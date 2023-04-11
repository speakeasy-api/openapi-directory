import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateVPCEConfigurationXAmzTargetEnum {
    DeviceFarm20150623UpdateVPCEConfiguration = "DeviceFarm_20150623.UpdateVPCEConfiguration"
}
export declare class UpdateVPCEConfigurationRequest extends SpeakeasyBase {
    updateVPCEConfigurationRequest: shared.UpdateVPCEConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateVPCEConfigurationXAmzTargetEnum;
}
export declare class UpdateVPCEConfigurationResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateVPCEConfigurationResult?: shared.UpdateVPCEConfigurationResult;
}
