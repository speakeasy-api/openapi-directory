import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRegistryScanningConfigurationXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921GetRegistryScanningConfiguration = "AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration"
}
export declare class GetRegistryScanningConfigurationRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRegistryScanningConfigurationXAmzTargetEnum;
}
export declare class GetRegistryScanningConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getRegistryScanningConfigurationResponse?: shared.GetRegistryScanningConfigurationResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
