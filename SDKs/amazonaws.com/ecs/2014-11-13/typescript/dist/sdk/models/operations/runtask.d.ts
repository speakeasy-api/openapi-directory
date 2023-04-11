import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RunTaskXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113RunTask = "AmazonEC2ContainerServiceV20141113.RunTask"
}
export declare class RunTaskRequest extends SpeakeasyBase {
    runTaskRequest: shared.RunTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RunTaskXAmzTargetEnum;
}
export declare class RunTaskResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BlockedException
     */
    blockedException?: any;
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
     * PlatformTaskDefinitionIncompatibilityException
     */
    platformTaskDefinitionIncompatibilityException?: any;
    /**
     * PlatformUnknownException
     */
    platformUnknownException?: any;
    /**
     * Success
     */
    runTaskResponse?: shared.RunTaskResponse;
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
