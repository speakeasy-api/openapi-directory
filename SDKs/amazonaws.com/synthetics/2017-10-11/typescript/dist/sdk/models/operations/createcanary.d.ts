import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.
 */
export declare class CreateCanaryRequestBodyArtifactConfig extends SpeakeasyBase {
    s3Encryption?: shared.S3EncryptionConfig;
}
/**
 * Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>.
 */
export declare class CreateCanaryRequestBodyCode extends SpeakeasyBase {
    handler?: string;
    s3Bucket?: string;
    s3Key?: string;
    s3Version?: string;
    zipFile?: string;
}
/**
 * A structure that contains input information for a canary run.
 */
export declare class CreateCanaryRequestBodyRunConfig extends SpeakeasyBase {
    activeTracing?: boolean;
    environmentVariables?: Record<string, string>;
    memoryInMB?: number;
    timeoutInSeconds?: number;
}
/**
 * This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
 */
export declare class CreateCanaryRequestBodySchedule extends SpeakeasyBase {
    durationInSeconds?: number;
    expression?: string;
}
/**
 * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
 */
export declare class CreateCanaryRequestBodyVpcConfig extends SpeakeasyBase {
    securityGroupIds?: string[];
    subnetIds?: string[];
}
export declare class CreateCanaryRequestBody extends SpeakeasyBase {
    /**
     * A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.
     */
    artifactConfig?: CreateCanaryRequestBodyArtifactConfig;
    /**
     * The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the S3 bucket can't include a period (.).
     */
    artifactS3Location: string;
    /**
     * Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>.
     */
    code: CreateCanaryRequestBodyCode;
    /**
     * <p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:PutLogEvents</code> </p> </li> </ul>
     */
    executionRoleArn: string;
    /**
     * The number of days to retain data about failed runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
     */
    failureRetentionPeriodInDays?: number;
    /**
     * <p>The name for this canary. Be sure to give it a descriptive name that distinguishes it from other canaries in your account.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the canary ARN, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>
     */
    name: string;
    /**
     * A structure that contains input information for a canary run.
     */
    runConfig?: CreateCanaryRequestBodyRunConfig;
    /**
     * Specifies the runtime version to use for the canary. For a list of valid runtime versions and more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
     */
    runtimeVersion: string;
    /**
     * This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
     */
    schedule: CreateCanaryRequestBodySchedule;
    /**
     * The number of days to retain data about successful runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
     */
    successRetentionPeriodInDays?: number;
    /**
     * <p>A list of key-value pairs to associate with the canary. You can associate as many as 50 tags with a canary.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.</p>
     */
    tags?: Record<string, string>;
    /**
     * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
     */
    vpcConfig?: CreateCanaryRequestBodyVpcConfig;
}
export declare class CreateCanaryRequest extends SpeakeasyBase {
    requestBody: CreateCanaryRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateCanaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createCanaryResponse?: shared.CreateCanaryResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * RequestEntityTooLargeException
     */
    requestEntityTooLargeException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
