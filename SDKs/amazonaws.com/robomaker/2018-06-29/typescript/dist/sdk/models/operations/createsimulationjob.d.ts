import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Compute information for the simulation job.
 */
export declare class CreateSimulationJobRequestBodyCompute extends SpeakeasyBase {
    computeType?: shared.ComputeTypeEnum;
    gpuUnitLimit?: number;
    simulationUnitLimit?: number;
}
/**
 * <p>The failure behavior the simulation job.</p> <dl> <dt>Continue</dt> <dd> <p>Leaves the instance running for its maximum timeout duration after a <code>4XX</code> error code.</p> </dd> <dt>Fail</dt> <dd> <p>Stop the simulation job and terminate the instance.</p> </dd> </dl>
 */
export declare enum CreateSimulationJobRequestBodyFailureBehaviorEnum {
    Fail = "Fail",
    Continue = "Continue"
}
/**
 * The logging configuration.
 */
export declare class CreateSimulationJobRequestBodyLoggingConfig extends SpeakeasyBase {
    recordAllRosTopics?: boolean;
}
/**
 * The output location.
 */
export declare class CreateSimulationJobRequestBodyOutputLocation extends SpeakeasyBase {
    s3Bucket?: string;
    s3Prefix?: string;
}
/**
 * If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.
 */
export declare class CreateSimulationJobRequestBodyVpcConfig extends SpeakeasyBase {
    assignPublicIp?: boolean;
    securityGroups?: string[];
    subnets?: string[];
}
export declare class CreateSimulationJobRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: string;
    /**
     * Compute information for the simulation job.
     */
    compute?: CreateSimulationJobRequestBodyCompute;
    /**
     * <p>Specify data sources to mount read-only files from S3 into your simulation. These files are available under <code>/opt/robomaker/datasources/data_source_name</code>. </p> <note> <p>There is a limit of 100 files and a combined size of 25GB for all <code>DataSourceConfig</code> objects. </p> </note>
     */
    dataSources?: shared.DataSourceConfig[];
    /**
     * <p>The failure behavior the simulation job.</p> <dl> <dt>Continue</dt> <dd> <p>Leaves the instance running for its maximum timeout duration after a <code>4XX</code> error code.</p> </dd> <dt>Fail</dt> <dd> <p>Stop the simulation job and terminate the instance.</p> </dd> </dl>
     */
    failureBehavior?: CreateSimulationJobRequestBodyFailureBehaviorEnum;
    /**
     * The IAM role name that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf. This is how credentials are passed in to your simulation job.
     */
    iamRole: string;
    /**
     * The logging configuration.
     */
    loggingConfig?: CreateSimulationJobRequestBodyLoggingConfig;
    /**
     * The maximum simulation job duration in seconds (up to 14 days or 1,209,600 seconds. When <code>maxJobDurationInSeconds</code> is reached, the simulation job will status will transition to <code>Completed</code>.
     */
    maxJobDurationInSeconds: number;
    /**
     * The output location.
     */
    outputLocation?: CreateSimulationJobRequestBodyOutputLocation;
    /**
     * The robot application to use in the simulation job.
     */
    robotApplications?: shared.RobotApplicationConfig[];
    /**
     * The simulation application to use in the simulation job.
     */
    simulationApplications?: shared.SimulationApplicationConfig[];
    /**
     * A map that contains tag keys and tag values that are attached to the simulation job.
     */
    tags?: Record<string, string>;
    /**
     * If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.
     */
    vpcConfig?: CreateSimulationJobRequestBodyVpcConfig;
}
export declare class CreateSimulationJobRequest extends SpeakeasyBase {
    requestBody: CreateSimulationJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSimulationJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSimulationJobResponse?: shared.CreateSimulationJobResponse;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
