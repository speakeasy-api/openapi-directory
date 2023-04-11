import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateServiceXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113CreateService = "AmazonEC2ContainerServiceV20141113.CreateService"
}
export declare class CreateServiceRequest extends SpeakeasyBase {
    createServiceRequest: shared.CreateServiceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateServiceXAmzTargetEnum;
}
export declare class CreateServiceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    /**
     * ClusterNotFoundException
     */
    clusterNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    createServiceResponse?: shared.CreateServiceResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NamespaceNotFoundException
     */
    namespaceNotFoundException?: any;
    /**
     * PlatformTaskDefinitionIncompatibilityException
     */
    platformTaskDefinitionIncompatibilityException?: any;
    /**
     * PlatformUnknownException
     */
    platformUnknownException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedFeatureException
     */
    unsupportedFeatureException?: any;
}
