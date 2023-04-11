import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateServiceXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateService = "AmazonEC2ContainerServiceV20141113.UpdateService"
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    updateServiceRequest: shared.UpdateServiceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServiceXAmzTargetEnum;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
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
     * ServerException
     */
    serverException?: any;
    /**
     * Success
     */
    updateServiceResponse?: shared.UpdateServiceResponse;
}
