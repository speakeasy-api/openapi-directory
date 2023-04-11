import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteVPCEConfigurationXAmzTargetEnum {
    DeviceFarm20150623DeleteVPCEConfiguration = "DeviceFarm_20150623.DeleteVPCEConfiguration"
}
export declare class DeleteVPCEConfigurationRequest extends SpeakeasyBase {
    deleteVPCEConfigurationRequest: shared.DeleteVPCEConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteVPCEConfigurationXAmzTargetEnum;
}
export declare class DeleteVPCEConfigurationResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteVPCEConfigurationResult?: Record<string, any>;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
}
