import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The AMI type for your node group. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>amiType</code>, or the node group deployment will fail. If your launch template uses a Windows custom AMI, then add <code>eks:kube-proxy-windows</code> to your Windows nodes <code>rolearn</code> in the <code>aws-auth</code> <code>ConfigMap</code>. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.
 */
export declare enum CreateNodegroupRequestBodyAmiTypeEnum {
    Al2X8664 = "AL2_x86_64",
    Al2X8664GPU = "AL2_x86_64_GPU",
    Al2Arm64 = "AL2_ARM_64",
    Custom = "CUSTOM",
    BottlerocketArm64 = "BOTTLEROCKET_ARM_64",
    BOTTLEROCKETX8664 = "BOTTLEROCKET_x86_64",
    BottlerocketArm64Nvidia = "BOTTLEROCKET_ARM_64_NVIDIA",
    BOTTLEROCKETX8664NVIDIA = "BOTTLEROCKET_x86_64_NVIDIA",
    WINDOWSCORE2019X8664 = "WINDOWS_CORE_2019_x86_64",
    WINDOWSFULL2019X8664 = "WINDOWS_FULL_2019_x86_64",
    WINDOWSCORE2022X8664 = "WINDOWS_CORE_2022_x86_64",
    WINDOWSFULL2022X8664 = "WINDOWS_FULL_2022_x86_64"
}
/**
 * The capacity type for your node group.
 */
export declare enum CreateNodegroupRequestBodyCapacityTypeEnum {
    OnDemand = "ON_DEMAND",
    Spot = "SPOT"
}
/**
 * <p>An object representing a node group launch template specification. The launch template can't include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p> <p>You must specify either the launch template ID or the launch template name in the request, but not both.</p>
 */
export declare class CreateNodegroupRequestBodyLaunchTemplate extends SpeakeasyBase {
    id?: string;
    name?: string;
    version?: string;
}
/**
 * An object representing the remote access configuration for the managed node group.
 */
export declare class CreateNodegroupRequestBodyRemoteAccess extends SpeakeasyBase {
    ec2SshKey?: string;
    sourceSecurityGroups?: string[];
}
/**
 * An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
 */
export declare class CreateNodegroupRequestBodyScalingConfig extends SpeakeasyBase {
    desiredSize?: number;
    maxSize?: number;
    minSize?: number;
}
/**
 * The node group update configuration.
 */
export declare class CreateNodegroupRequestBodyUpdateConfig extends SpeakeasyBase {
    maxUnavailable?: number;
    maxUnavailablePercentage?: number;
}
export declare class CreateNodegroupRequestBody extends SpeakeasyBase {
    /**
     * The AMI type for your node group. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>amiType</code>, or the node group deployment will fail. If your launch template uses a Windows custom AMI, then add <code>eks:kube-proxy-windows</code> to your Windows nodes <code>rolearn</code> in the <code>aws-auth</code> <code>ConfigMap</code>. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.
     */
    amiType?: CreateNodegroupRequestBodyAmiTypeEnum;
    /**
     * The capacity type for your node group.
     */
    capacityType?: CreateNodegroupRequestBodyCapacityTypeEnum;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: string;
    /**
     * The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB for Linux and Bottlerocket. The default disk size is 50 GiB for Windows. If you specify <code>launchTemplate</code>, then don't specify <code>diskSize</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.
     */
    diskSize?: number;
    /**
     * Specify the instance types for a node group. If you specify a GPU instance type, make sure to also specify an applicable GPU AMI type with the <code>amiType</code> parameter. If you specify <code>launchTemplate</code>, then you can specify zero or one instance type in your launch template <i>or</i> you can specify 0-20 instance types for <code>instanceTypes</code>. If however, you specify an instance type in your launch template <i>and</i> specify any <code>instanceTypes</code>, the node group deployment will fail. If you don't specify an instance type in a launch template or for <code>instanceTypes</code>, then <code>t3.medium</code> is used, by default. If you specify <code>Spot</code> for <code>capacityType</code>, then we recommend specifying multiple values for <code>instanceTypes</code>. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html#managed-node-group-capacity-types">Managed node group capacity types</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.
     */
    instanceTypes?: string[];
    /**
     * The Kubernetes labels to be applied to the nodes in the node group when they are created.
     */
    labels?: Record<string, string>;
    /**
     * <p>An object representing a node group launch template specification. The launch template can't include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p> <p>You must specify either the launch template ID or the launch template name in the request, but not both.</p>
     */
    launchTemplate?: CreateNodegroupRequestBodyLaunchTemplate;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker node <code>kubelet</code> daemon makes calls to Amazon Web Services APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch nodes and register them into a cluster, you must create an IAM role for those nodes to use when they are launched. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i> <i>Amazon EKS User Guide</i> </i>. If you specify <code>launchTemplate</code>, then don't specify <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a> in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.
     */
    nodeRole: string;
    /**
     * The unique name to give your node group.
     */
    nodegroupName: string;
    /**
     * <p>The AMI version of the Amazon EKS optimized AMI to use with your node group. By default, the latest available AMI version for the node group's current Kubernetes version is used. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>releaseVersion</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p>
     */
    releaseVersion?: string;
    /**
     * An object representing the remote access configuration for the managed node group.
     */
    remoteAccess?: CreateNodegroupRequestBodyRemoteAccess;
    /**
     * An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
     */
    scalingConfig?: CreateNodegroupRequestBodyScalingConfig;
    /**
     * The subnets to use for the Auto Scaling group that is created for your node group. If you specify <code>launchTemplate</code>, then don't specify <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a> in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.
     */
    subnets: string[];
    /**
     * The metadata to apply to the node group to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets.
     */
    tags?: Record<string, string>;
    /**
     * The Kubernetes taints to be applied to the nodes in the node group. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.
     */
    taints?: shared.Taint[];
    /**
     * The node group update configuration.
     */
    updateConfig?: CreateNodegroupRequestBodyUpdateConfig;
    /**
     * The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>version</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.
     */
    version?: string;
}
export declare class CreateNodegroupRequest extends SpeakeasyBase {
    requestBody: CreateNodegroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the cluster to create the node group in.
     */
    name: string;
}
export declare class CreateNodegroupResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    createNodegroupResponse?: shared.CreateNodegroupResponse;
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
}
