import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that represents an Batch array job.
 */
export declare class SubmitJobRequestBodyArrayProperties extends SpeakeasyBase {
    size?: number;
}
/**
 * The overrides that should be sent to a container.
 */
export declare class SubmitJobRequestBodyContainerOverrides extends SpeakeasyBase {
    command?: string[];
    environment?: shared.KeyValuePair[];
    instanceType?: string;
    memory?: number;
    resourceRequirements?: shared.ResourceRequirement[];
    vcpus?: number;
}
/**
 * An object that contains overrides for the Kubernetes resources of a job.
 */
export declare class SubmitJobRequestBodyEksPropertiesOverride extends SpeakeasyBase {
    podProperties?: shared.EksPodPropertiesOverride;
}
/**
 * <p>An object that represents any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these jobs. Rather, use <code>containerOverrides</code> instead.</p> </note>
 */
export declare class SubmitJobRequestBodyNodeOverrides extends SpeakeasyBase {
    nodePropertyOverrides?: shared.NodePropertyOverride[];
    numNodes?: number;
}
/**
 * The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
 */
export declare class SubmitJobRequestBodyRetryStrategy extends SpeakeasyBase {
    attempts?: number;
    evaluateOnExit?: shared.EvaluateOnExit[];
}
/**
 * An object that represents a job timeout configuration.
 */
export declare class SubmitJobRequestBodyTimeout extends SpeakeasyBase {
    attemptDurationSeconds?: number;
}
export declare class SubmitJobRequestBody extends SpeakeasyBase {
    /**
     * An object that represents an Batch array job.
     */
    arrayProperties?: SubmitJobRequestBodyArrayProperties;
    /**
     * The overrides that should be sent to a container.
     */
    containerOverrides?: SubmitJobRequestBodyContainerOverrides;
    /**
     * A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a <code>SEQUENTIAL</code> type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an <code>N_TO_N</code> type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin.
     */
    dependsOn?: shared.JobDependency[];
    /**
     * An object that contains overrides for the Kubernetes resources of a job.
     */
    eksPropertiesOverride?: SubmitJobRequestBodyEksPropertiesOverride;
    /**
     * <p>The job definition used by this job. This value can be one of <code>definition-name</code>, <code>definition-name:revision</code>, or the Amazon Resource Name (ARN) for the job definition, with or without the revision (<code>arn:aws:batch:<i>region</i>:<i>account</i>:job-definition/<i>definition-name</i>:<i>revision</i> </code>, or <code>arn:aws:batch:<i>region</i>:<i>account</i>:job-definition/<i>definition-name</i> </code>).</p> <p>If the revision is not specified, then the latest active revision is used.</p>
     */
    jobDefinition: string;
    /**
     * The name of the job. It can be up to 128 letters long. The first character must be alphanumeric, can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
     */
    jobName: string;
    /**
     * The job queue where the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the queue.
     */
    jobQueue: string;
    /**
     * <p>An object that represents any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these jobs. Rather, use <code>containerOverrides</code> instead.</p> </note>
     */
    nodeOverrides?: SubmitJobRequestBodyNodeOverrides;
    /**
     * Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition.
     */
    parameters?: Record<string, string>;
    /**
     * Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state. When specified, this overrides the tag propagation setting in the job definition.
     */
    propagateTags?: boolean;
    /**
     * The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
     */
    retryStrategy?: SubmitJobRequestBodyRetryStrategy;
    /**
     * <p>The scheduling priority for the job. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority. This overrides any scheduling priority in the job definition.</p> <p>The minimum supported value is 0 and the maximum supported value is 9999.</p>
     */
    schedulingPriorityOverride?: number;
    /**
     * The share identifier for the job. If the job queue doesn't have a scheduling policy, then this parameter must not be specified. If the job queue has a scheduling policy, then this parameter must be specified.
     */
    shareIdentifier?: string;
    /**
     * The tags that you apply to the job request to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.
     */
    tags?: Record<string, string>;
    /**
     * An object that represents a job timeout configuration.
     */
    timeout?: SubmitJobRequestBodyTimeout;
}
export declare class SubmitJobRequest extends SpeakeasyBase {
    requestBody: SubmitJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SubmitJobResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    submitJobResponse?: shared.SubmitJobResponse;
}
