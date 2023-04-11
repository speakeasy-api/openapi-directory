import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetTaskProtectionXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113GetTaskProtection = "AmazonEC2ContainerServiceV20141113.GetTaskProtection"
}
export declare class GetTaskProtectionRequest extends SpeakeasyBase {
    getTaskProtectionRequest: shared.GetTaskProtectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTaskProtectionXAmzTargetEnum;
}
export declare class GetTaskProtectionResponse extends SpeakeasyBase {
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
    getTaskProtectionResponse?: shared.GetTaskProtectionResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
