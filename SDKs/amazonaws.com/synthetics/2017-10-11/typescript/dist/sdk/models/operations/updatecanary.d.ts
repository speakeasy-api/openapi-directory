import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.
 */
export declare class UpdateCanaryRequestBodyArtifactConfig extends SpeakeasyBase {
    s3Encryption?: shared.S3EncryptionConfig;
}
/**
 * Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>.
 */
export declare class UpdateCanaryRequestBodyCode extends SpeakeasyBase {
    handler?: string;
    s3Bucket?: string;
    s3Key?: string;
    s3Version?: string;
    zipFile?: string;
}
/**
 * A structure that contains input information for a canary run.
 */
export declare class UpdateCanaryRequestBodyRunConfig extends SpeakeasyBase {
    activeTracing?: boolean;
    environmentVariables?: Record<string, string>;
    memoryInMB?: number;
    timeoutInSeconds?: number;
}
/**
 * This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
 */
export declare class UpdateCanaryRequestBodySchedule extends SpeakeasyBase {
    durationInSeconds?: number;
    expression?: string;
}
/**
 * <p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary. It can optionally also specify parts of the screenshots to ignore during the visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html"> Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html"> Visual monitoring blueprint</a> </p>
 */
export declare class UpdateCanaryRequestBodyVisualReference extends SpeakeasyBase {
    baseCanaryRunId?: string;
    baseScreenshots?: shared.BaseScreenshot[];
}
/**
 * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
 */
export declare class UpdateCanaryRequestBodyVpcConfig extends SpeakeasyBase {
    securityGroupIds?: string[];
    subnetIds?: string[];
}
export declare class UpdateCanaryRequestBody extends SpeakeasyBase {
    /**
     * A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.
     */
    artifactConfig?: UpdateCanaryRequestBodyArtifactConfig;
    /**
     * The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the S3 bucket can't include a period (.).
     */
    artifactS3Location?: string;
    /**
     * Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>.
     */
    code?: UpdateCanaryRequestBodyCode;
    /**
     * <p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> </ul>
     */
    executionRoleArn?: string;
    /**
     * The number of days to retain data about failed runs of this canary.
     */
    failureRetentionPeriodInDays?: number;
    /**
     * A structure that contains input information for a canary run.
     */
    runConfig?: UpdateCanaryRequestBodyRunConfig;
    /**
     * Specifies the runtime version to use for the canary. For a list of valid runtime versions and for more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
     */
    runtimeVersion?: string;
    /**
     * This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
     */
    schedule?: UpdateCanaryRequestBodySchedule;
    /**
     * The number of days to retain data about successful runs of this canary.
     */
    successRetentionPeriodInDays?: number;
    /**
     * <p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary. It can optionally also specify parts of the screenshots to ignore during the visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html"> Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html"> Visual monitoring blueprint</a> </p>
     */
    visualReference?: UpdateCanaryRequestBodyVisualReference;
    /**
     * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
     */
    vpcConfig?: UpdateCanaryRequestBodyVpcConfig;
}
export declare class UpdateCanaryRequest extends SpeakeasyBase {
    requestBody: UpdateCanaryRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * <p>The name of the canary that you want to update. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p> <p>You cannot change the name of a canary that has already been created.</p>
     */
    name: string;
}
export declare class UpdateCanaryResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RequestEntityTooLargeException
     */
    requestEntityTooLargeException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateCanaryResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
