import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetRepositoryScanningConfigurationXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921BatchGetRepositoryScanningConfiguration = "AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration"
}
export declare class BatchGetRepositoryScanningConfigurationRequest extends SpeakeasyBase {
    batchGetRepositoryScanningConfigurationRequest: shared.BatchGetRepositoryScanningConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetRepositoryScanningConfigurationXAmzTargetEnum;
}
export declare class BatchGetRepositoryScanningConfigurationResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetRepositoryScanningConfigurationResponse?: shared.BatchGetRepositoryScanningConfigurationResponse;
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
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
