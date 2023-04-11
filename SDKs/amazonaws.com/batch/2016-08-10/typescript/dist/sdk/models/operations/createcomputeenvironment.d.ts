import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that represents an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the <i>Batch User Guide</i>.
 */
export declare class CreateComputeEnvironmentRequestBodyComputeResources extends SpeakeasyBase {
    allocationStrategy?: shared.CRAllocationStrategyEnum;
    bidPercentage?: number;
    desiredvCpus?: number;
    ec2Configuration?: shared.Ec2Configuration[];
    ec2KeyPair?: string;
    imageId?: string;
    instanceRole?: string;
    instanceTypes?: string[];
    launchTemplate?: shared.LaunchTemplateSpecification;
    maxvCpus?: number;
    minvCpus?: number;
    placementGroup?: string;
    securityGroupIds?: string[];
    spotIamFleetRole?: string;
    subnets?: string[];
    tags?: Record<string, string>;
    type?: shared.CRTypeEnum;
}
/**
 * Configuration for the Amazon EKS cluster that supports the Batch compute environment. The cluster must exist before the compute environment can be created.
 */
export declare class CreateComputeEnvironmentRequestBodyEksConfiguration extends SpeakeasyBase {
    eksClusterArn?: string;
    kubernetesNamespace?: string;
}
/**
 * <p>The state of the compute environment. If the state is <code>ENABLED</code>, then the compute environment accepts jobs from a queue and can scale out automatically based on queues.</p> <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand.</p> <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed compute environments in the <code>DISABLED</code> state don't scale out. </p> <note> <p>Compute environments in a <code>DISABLED</code> state may continue to incur billing charges. To prevent additional charges, turn off and then delete the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environment_parameters.html#compute_environment_state">State</a> in the <i>Batch User Guide</i>.</p> </note> <p>When an instance is idle, the instance scales down to the <code>minvCpus</code> value. However, the instance size doesn't change. For example, consider a <code>c5.8xlarge</code> instance with a <code>minvCpus</code> value of <code>4</code> and a <code>desiredvCpus</code> value of <code>36</code>. This instance doesn't scale down to a <code>c5.large</code> instance.</p>
 */
export declare enum CreateComputeEnvironmentRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
/**
 * The type of the compute environment: <code>MANAGED</code> or <code>UNMANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
 */
export declare enum CreateComputeEnvironmentRequestBodyTypeEnum {
    Managed = "MANAGED",
    Unmanaged = "UNMANAGED"
}
export declare class CreateComputeEnvironmentRequestBody extends SpeakeasyBase {
    /**
     * The name for your compute environment. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
     */
    computeEnvironmentName: string;
    /**
     * An object that represents an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the <i>Batch User Guide</i>.
     */
    computeResources?: CreateComputeEnvironmentRequestBodyComputeResources;
    /**
     * Configuration for the Amazon EKS cluster that supports the Batch compute environment. The cluster must exist before the compute environment can be created.
     */
    eksConfiguration?: CreateComputeEnvironmentRequestBodyEksConfiguration;
    /**
     * <p>The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM role</a> in the <i>Batch User Guide</i>.</p> <important> <p>If your account already created the Batch service-linked role, that role is used by default for your compute environment unless you specify a different role here. If the Batch service-linked role doesn't exist in your account, and no role is specified here, the service attempts to create the Batch service-linked role in your account.</p> </important> <p>If your specified role has a path other than <code>/</code>, then you must specify either the full role ARN (recommended) or prefix the role name with the path. For example, if a role with the name <code>bar</code> has a path of <code>/foo/</code>, specify <code>/foo/bar</code> as the role name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names">Friendly names and paths</a> in the <i>IAM User Guide</i>.</p> <note> <p>Depending on how you created your Batch service role, its ARN might contain the <code>service-role</code> path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn't use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note>
     */
    serviceRole?: string;
    /**
     * <p>The state of the compute environment. If the state is <code>ENABLED</code>, then the compute environment accepts jobs from a queue and can scale out automatically based on queues.</p> <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand.</p> <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed compute environments in the <code>DISABLED</code> state don't scale out. </p> <note> <p>Compute environments in a <code>DISABLED</code> state may continue to incur billing charges. To prevent additional charges, turn off and then delete the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environment_parameters.html#compute_environment_state">State</a> in the <i>Batch User Guide</i>.</p> </note> <p>When an instance is idle, the instance scales down to the <code>minvCpus</code> value. However, the instance size doesn't change. For example, consider a <code>c5.8xlarge</code> instance with a <code>minvCpus</code> value of <code>4</code> and a <code>desiredvCpus</code> value of <code>36</code>. This instance doesn't scale down to a <code>c5.large</code> instance.</p>
     */
    state?: CreateComputeEnvironmentRequestBodyStateEnum;
    /**
     * <p>The tags that you apply to the compute environment to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.</p> <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations. These tags don't propagate to the underlying compute resources.</p>
     */
    tags?: Record<string, string>;
    /**
     * The type of the compute environment: <code>MANAGED</code> or <code>UNMANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
     */
    type: CreateComputeEnvironmentRequestBodyTypeEnum;
    /**
     * <p>The maximum number of vCPUs for an unmanaged compute environment. This parameter is only used for fair share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair share job queue, no vCPU capacity is reserved.</p> <note> <p>This parameter is only supported when the <code>type</code> parameter is set to <code>UNMANAGED</code>.</p> </note>
     */
    unmanagedvCpus?: number;
}
export declare class CreateComputeEnvironmentRequest extends SpeakeasyBase {
    requestBody: CreateComputeEnvironmentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateComputeEnvironmentResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    createComputeEnvironmentResponse?: shared.CreateComputeEnvironmentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
}
