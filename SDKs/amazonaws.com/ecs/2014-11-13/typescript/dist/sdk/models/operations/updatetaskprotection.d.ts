import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateTaskProtectionXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateTaskProtection = "AmazonEC2ContainerServiceV20141113.UpdateTaskProtection"
}
export declare class UpdateTaskProtectionRequest extends SpeakeasyBase {
    updateTaskProtectionRequest: shared.UpdateTaskProtectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTaskProtectionXAmzTargetEnum;
}
export declare class UpdateTaskProtectionResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    /**
     * UnsupportedFeatureException
     */
    unsupportedFeatureException?: any;
    /**
     * Success
     */
    updateTaskProtectionResponse?: shared.UpdateTaskProtectionResponse;
}
