import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Container properties are used for Amazon ECS based job definitions. These properties to describe the container that's launched as part of a job.
 */
export declare class RegisterJobDefinitionRequestBodyContainerProperties extends SpeakeasyBase {
    command?: string[];
    environment?: shared.KeyValuePair[];
    ephemeralStorage?: shared.EphemeralStorage;
    executionRoleArn?: string;
    fargatePlatformConfiguration?: shared.FargatePlatformConfiguration;
    image?: string;
    instanceType?: string;
    jobRoleArn?: string;
    linuxParameters?: shared.LinuxParameters;
    logConfiguration?: shared.LogConfiguration;
    memory?: number;
    mountPoints?: shared.MountPoint[];
    networkConfiguration?: shared.NetworkConfiguration;
    privileged?: boolean;
    readonlyRootFilesystem?: boolean;
    resourceRequirements?: shared.ResourceRequirement[];
    secrets?: shared.Secret[];
    ulimits?: shared.Ulimit[];
    user?: string;
    vcpus?: number;
    volumes?: shared.Volume[];
}
/**
 * An object that contains the properties for the Kubernetes resources of a job.
 */
export declare class RegisterJobDefinitionRequestBodyEksProperties extends SpeakeasyBase {
    podProperties?: shared.EksPodProperties;
}
/**
 * <p>An object that represents the node properties of a multi-node parallel job.</p> <note> <p>Node properties can't be specified for Amazon EKS based job definitions.</p> </note>
 */
export declare class RegisterJobDefinitionRequestBodyNodeProperties extends SpeakeasyBase {
    mainNode?: number;
    nodeRangeProperties?: shared.NodeRangeProperty[];
    numNodes?: number;
}
/**
 * The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
 */
export declare class RegisterJobDefinitionRequestBodyRetryStrategy extends SpeakeasyBase {
    attempts?: number;
    evaluateOnExit?: shared.EvaluateOnExit[];
}
/**
 * An object that represents a job timeout configuration.
 */
export declare class RegisterJobDefinitionRequestBodyTimeout extends SpeakeasyBase {
    attemptDurationSeconds?: number;
}
/**
 * <p>The type of job definition. For more information about multi-node parallel jobs, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html">Creating a multi-node parallel job definition</a> in the <i>Batch User Guide</i>.</p> <note> <p>If the job is run on Fargate resources, then <code>multinode</code> isn't supported.</p> </note>
 */
export declare enum RegisterJobDefinitionRequestBodyTypeEnum {
    Container = "container",
    Multinode = "multinode"
}
export declare class RegisterJobDefinitionRequestBody extends SpeakeasyBase {
    /**
     * Container properties are used for Amazon ECS based job definitions. These properties to describe the container that's launched as part of a job.
     */
    containerProperties?: RegisterJobDefinitionRequestBodyContainerProperties;
    /**
     * An object that contains the properties for the Kubernetes resources of a job.
     */
    eksProperties?: RegisterJobDefinitionRequestBodyEksProperties;
    /**
     * The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
     */
    jobDefinitionName: string;
    /**
     * <p>An object that represents the node properties of a multi-node parallel job.</p> <note> <p>Node properties can't be specified for Amazon EKS based job definitions.</p> </note>
     */
    nodeProperties?: RegisterJobDefinitionRequestBodyNodeProperties;
    /**
     * Default parameter substitution placeholders to set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition.
     */
    parameters?: Record<string, string>;
    /**
     * <p>The platform capabilities required by the job definition. If no value is specified, it defaults to <code>EC2</code>. To run the job on Fargate resources, specify <code>FARGATE</code>.</p> <note> <p>If the job runs on Amazon EKS resources, then you must not specify <code>platformCapabilities</code>.</p> </note>
     */
    platformCapabilities?: shared.PlatformCapabilityEnum[];
    /**
     * <p>Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags are not propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state.</p> <note> <p>If the job runs on Amazon EKS resources, then you must not specify <code>propagateTags</code>.</p> </note>
     */
    propagateTags?: boolean;
    /**
     * The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
     */
    retryStrategy?: RegisterJobDefinitionRequestBodyRetryStrategy;
    /**
     * <p>The scheduling priority for jobs that are submitted with this job definition. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority.</p> <p>The minimum supported value is 0 and the maximum supported value is 9999.</p>
     */
    schedulingPriority?: number;
    /**
     * The tags that you apply to the job definition to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging Amazon Web Services Resources</a> in <i>Batch User Guide</i>.
     */
    tags?: Record<string, string>;
    /**
     * An object that represents a job timeout configuration.
     */
    timeout?: RegisterJobDefinitionRequestBodyTimeout;
    /**
     * <p>The type of job definition. For more information about multi-node parallel jobs, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html">Creating a multi-node parallel job definition</a> in the <i>Batch User Guide</i>.</p> <note> <p>If the job is run on Fargate resources, then <code>multinode</code> isn't supported.</p> </note>
     */
    type: RegisterJobDefinitionRequestBodyTypeEnum;
}
export declare class RegisterJobDefinitionRequest extends SpeakeasyBase {
    requestBody: RegisterJobDefinitionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RegisterJobDefinitionResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    registerJobDefinitionResponse?: shared.RegisterJobDefinitionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
}
