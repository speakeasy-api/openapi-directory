import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutRegistryScanningConfigurationXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921PutRegistryScanningConfiguration = "AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration"
}
export declare class PutRegistryScanningConfigurationRequest extends SpeakeasyBase {
    putRegistryScanningConfigurationRequest: shared.PutRegistryScanningConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRegistryScanningConfigurationXAmzTargetEnum;
}
export declare class PutRegistryScanningConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    putRegistryScanningConfigurationResponse?: shared.PutRegistryScanningConfigurationResponse;
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
