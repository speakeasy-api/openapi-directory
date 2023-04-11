import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetVPCEConfigurationXAmzTargetEnum {
    DeviceFarm20150623GetVPCEConfiguration = "DeviceFarm_20150623.GetVPCEConfiguration"
}
export declare class GetVPCEConfigurationRequest extends SpeakeasyBase {
    getVPCEConfigurationRequest: shared.GetVPCEConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetVPCEConfigurationXAmzTargetEnum;
}
export declare class GetVPCEConfigurationResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    getVPCEConfigurationResult?: shared.GetVPCEConfigurationResult;
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
