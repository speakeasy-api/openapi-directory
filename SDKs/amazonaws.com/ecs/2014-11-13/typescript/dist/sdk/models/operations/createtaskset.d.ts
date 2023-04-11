import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateTaskSetXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113CreateTaskSet = "AmazonEC2ContainerServiceV20141113.CreateTaskSet"
}
export declare class CreateTaskSetRequest extends SpeakeasyBase {
    createTaskSetRequest: shared.CreateTaskSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTaskSetXAmzTargetEnum;
}
export declare class CreateTaskSetResponse extends SpeakeasyBase {
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
    createTaskSetResponse?: shared.CreateTaskSetResponse;
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
    /**
     * ServiceNotActiveException
     */
    serviceNotActiveException?: any;
    /**
     * ServiceNotFoundException
     */
    serviceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedFeatureException
     */
    unsupportedFeatureException?: any;
}
