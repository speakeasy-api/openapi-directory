import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The Kubernetes network configuration for the cluster.
 */
export declare class CreateClusterRequestBodyKubernetesNetworkConfig extends SpeakeasyBase {
    ipFamily?: shared.IpFamilyEnum;
    serviceIpv4Cidr?: string;
}
/**
 * An object representing the logging configuration for resources in your cluster.
 */
export declare class CreateClusterRequestBodyLogging extends SpeakeasyBase {
    clusterLogging?: shared.LogSetup[];
}
/**
 * The configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. Before creating a cluster on an Outpost, review <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-create.html">Creating a local cluster on an Outpost</a> in the <i>Amazon EKS User Guide</i>. This API isn't available for Amazon EKS clusters on the Amazon Web Services cloud.
 */
export declare class CreateClusterRequestBodyOutpostConfig extends SpeakeasyBase {
    controlPlaneInstanceType?: string;
    controlPlanePlacement?: shared.ControlPlanePlacementRequest;
    outpostArns?: string[];
}
/**
 * An object representing the VPC configuration to use for an Amazon EKS cluster.
 */
export declare class CreateClusterRequestBodyResourcesVpcConfig extends SpeakeasyBase {
    endpointPrivateAccess?: boolean;
    endpointPublicAccess?: boolean;
    publicAccessCidrs?: string[];
    securityGroupIds?: string[];
    subnetIds?: string[];
}
export declare class CreateClusterRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: string;
    /**
     * The encryption configuration for the cluster.
     */
    encryptionConfig?: shared.EncryptionConfig[];
    /**
     * The Kubernetes network configuration for the cluster.
     */
    kubernetesNetworkConfig?: CreateClusterRequestBodyKubernetesNetworkConfig;
    /**
     * An object representing the logging configuration for resources in your cluster.
     */
    logging?: CreateClusterRequestBodyLogging;
    /**
     * The unique name to give to your cluster.
     */
    name: string;
    /**
     * The configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. Before creating a cluster on an Outpost, review <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-create.html">Creating a local cluster on an Outpost</a> in the <i>Amazon EKS User Guide</i>. This API isn't available for Amazon EKS clusters on the Amazon Web Services cloud.
     */
    outpostConfig?: CreateClusterRequestBodyOutpostConfig;
    /**
     * An object representing the VPC configuration to use for an Amazon EKS cluster.
     */
    resourcesVpcConfig: CreateClusterRequestBodyResourcesVpcConfig;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to Amazon Web Services API operations on your behalf. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html">Amazon EKS Service IAM Role</a> in the <i> <i>Amazon EKS User Guide</i> </i>.
     */
    roleArn: string;
    /**
     * The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value. You define both.
     */
    tags?: Record<string, string>;
    /**
     * <p>The desired Kubernetes version for your cluster. If you don't specify a value here, the default version available in Amazon EKS is used.</p> <note> <p>The default version might not be the latest version available.</p> </note>
     */
    version?: string;
}
export declare class CreateClusterRequest extends SpeakeasyBase {
    requestBody: CreateClusterRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateClusterResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    createClusterResponse?: shared.CreateClusterResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * UnsupportedAvailabilityZoneException
     */
    unsupportedAvailabilityZoneException?: any;
}
