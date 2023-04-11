import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateVPCEConfigurationXAmzTargetEnum {
    DeviceFarm20150623CreateVPCEConfiguration = "DeviceFarm_20150623.CreateVPCEConfiguration"
}
export declare class CreateVPCEConfigurationRequest extends SpeakeasyBase {
    createVPCEConfigurationRequest: shared.CreateVPCEConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateVPCEConfigurationXAmzTargetEnum;
}
export declare class CreateVPCEConfigurationResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    createVPCEConfigurationResult?: shared.CreateVPCEConfigurationResult;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
}
