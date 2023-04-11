import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutImageScanningConfigurationXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921PutImageScanningConfiguration = "AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration"
}
export declare class PutImageScanningConfigurationRequest extends SpeakeasyBase {
    putImageScanningConfigurationRequest: shared.PutImageScanningConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutImageScanningConfigurationXAmzTargetEnum;
}
export declare class PutImageScanningConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    putImageScanningConfigurationResponse?: shared.PutImageScanningConfigurationResponse;
    /**
     * RepositoryNotFoundException
     */
    repositoryNotFoundException?: any;
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
