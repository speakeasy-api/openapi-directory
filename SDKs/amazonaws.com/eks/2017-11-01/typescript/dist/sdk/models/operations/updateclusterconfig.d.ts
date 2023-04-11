import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object representing the logging configuration for resources in your cluster.
 */
export declare class UpdateClusterConfigRequestBodyLogging extends SpeakeasyBase {
    clusterLogging?: shared.LogSetup[];
}
/**
 * An object representing the VPC configuration to use for an Amazon EKS cluster.
 */
export declare class UpdateClusterConfigRequestBodyResourcesVpcConfig extends SpeakeasyBase {
    endpointPrivateAccess?: boolean;
    endpointPublicAccess?: boolean;
    publicAccessCidrs?: string[];
    securityGroupIds?: string[];
    subnetIds?: string[];
}
export declare class UpdateClusterConfigRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: string;
    /**
     * An object representing the logging configuration for resources in your cluster.
     */
    logging?: UpdateClusterConfigRequestBodyLogging;
    /**
     * An object representing the VPC configuration to use for an Amazon EKS cluster.
     */
    resourcesVpcConfig?: UpdateClusterConfigRequestBodyResourcesVpcConfig;
}
export declare class UpdateClusterConfigRequest extends SpeakeasyBase {
    requestBody: UpdateClusterConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the Amazon EKS cluster to update.
     */
    name: string;
}
export declare class UpdateClusterConfigResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
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
     * Success
     */
    updateClusterConfigResponse?: shared.UpdateClusterConfigResponse;
}
