import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The code for the Lambda function. You can either specify an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.
 */
export declare class CreateFunctionRequestBodyCode extends SpeakeasyBase {
    imageUri?: string;
    s3Bucket?: string;
    s3Key?: string;
    s3ObjectVersion?: string;
    zipFile?: string;
}
/**
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
 */
export declare class CreateFunctionRequestBodyDeadLetterConfig extends SpeakeasyBase {
    targetArn?: string;
}
/**
 * A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.
 */
export declare class CreateFunctionRequestBodyEnvironment extends SpeakeasyBase {
    variables?: Record<string, string>;
}
/**
 * The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.
 */
export declare class CreateFunctionRequestBodyEphemeralStorage extends SpeakeasyBase {
    size?: number;
}
/**
 * Configuration values that override the container image Dockerfile settings. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container image settings</a>.
 */
export declare class CreateFunctionRequestBodyImageConfig extends SpeakeasyBase {
    command?: string[];
    entryPoint?: string[];
    workingDirectory?: string;
}
/**
 * The type of deployment package. Set to <code>Image</code> for container image and set to <code>Zip</code> for .zip file archive.
 */
export declare enum CreateFunctionRequestBodyPackageTypeEnum {
    Zip = "Zip",
    Image = "Image"
}
/**
 * <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. Runtime is required if the deployment package is a .zip file archive.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>
 */
export declare enum CreateFunctionRequestBodyRuntimeEnum {
    Nodejs = "nodejs",
    Nodejs43 = "nodejs4.3",
    Nodejs610 = "nodejs6.10",
    Nodejs810 = "nodejs8.10",
    Nodejs10X = "nodejs10.x",
    Nodejs12X = "nodejs12.x",
    Nodejs14X = "nodejs14.x",
    Nodejs16X = "nodejs16.x",
    Java8 = "java8",
    Java8Al2 = "java8.al2",
    Java11 = "java11",
    Python27 = "python2.7",
    Python36 = "python3.6",
    Python37 = "python3.7",
    Python38 = "python3.8",
    Python39 = "python3.9",
    Dotnetcore10 = "dotnetcore1.0",
    Dotnetcore20 = "dotnetcore2.0",
    Dotnetcore21 = "dotnetcore2.1",
    Dotnetcore31 = "dotnetcore3.1",
    Dotnet6 = "dotnet6",
    Nodejs43Edge = "nodejs4.3-edge",
    Go1X = "go1.x",
    Ruby25 = "ruby2.5",
    Ruby27 = "ruby2.7",
    Provided = "provided",
    ProvidedAl2 = "provided.al2",
    Nodejs18X = "nodejs18.x"
}
/**
 * <p>The function's Lambda SnapStart setting. Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version.</p> <p>SnapStart is supported with the <code>java11</code> runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Improving startup performance with Lambda SnapStart</a>.</p>
 */
export declare class CreateFunctionRequestBodySnapStart extends SpeakeasyBase {
    applyOn?: shared.SnapStartApplyOnEnum;
}
/**
 * The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.
 */
export declare class CreateFunctionRequestBodyTracingConfig extends SpeakeasyBase {
    mode?: shared.TracingModeEnum;
}
/**
 * The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>.
 */
export declare class CreateFunctionRequestBodyVpcConfig extends SpeakeasyBase {
    securityGroupIds?: string[];
    subnetIds?: string[];
}
export declare class CreateFunctionRequestBody extends SpeakeasyBase {
    /**
     * The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is <code>x86_64</code>.
     */
    architectures?: shared.ArchitectureEnum[];
    /**
     * The code for the Lambda function. You can either specify an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.
     */
    code: CreateFunctionRequestBodyCode;
    /**
     * To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
     */
    codeSigningConfigArn?: string;
    /**
     * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
     */
    deadLetterConfig?: CreateFunctionRequestBodyDeadLetterConfig;
    /**
     * A description of the function.
     */
    description?: string;
    /**
     * A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.
     */
    environment?: CreateFunctionRequestBodyEnvironment;
    /**
     * The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.
     */
    ephemeralStorage?: CreateFunctionRequestBodyEphemeralStorage;
    /**
     * Connection settings for an Amazon EFS file system.
     */
    fileSystemConfigs?: shared.FileSystemConfig[];
    /**
     * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    functionName: string;
    /**
     * The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html">Lambda programming model</a>.
     */
    handler?: string;
    /**
     * Configuration values that override the container image Dockerfile settings. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container image settings</a>.
     */
    imageConfig?: CreateFunctionRequestBodyImageConfig;
    /**
     * The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption">environment variables</a>. When <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html">Lambda SnapStart</a> is activated, this key is also used to encrypt your function's snapshot. If you don't provide a customer managed key, Lambda uses a default service key.
     */
    kmsKeyArn?: string;
    /**
     * A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function's execution environment. Specify each layer by its ARN, including the version.
     */
    layers?: string[];
    /**
     * The amount of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console">memory available to the function</a> at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.
     */
    memorySize?: number;
    /**
     * The type of deployment package. Set to <code>Image</code> for container image and set to <code>Zip</code> for .zip file archive.
     */
    packageType?: CreateFunctionRequestBodyPackageTypeEnum;
    /**
     * Set to true to publish the first version of the function during creation.
     */
    publish?: boolean;
    /**
     * The Amazon Resource Name (ARN) of the function's execution role.
     */
    role: string;
    /**
     * <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. Runtime is required if the deployment package is a .zip file archive.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>
     */
    runtime?: CreateFunctionRequestBodyRuntimeEnum;
    /**
     * <p>The function's Lambda SnapStart setting. Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version.</p> <p>SnapStart is supported with the <code>java11</code> runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Improving startup performance with Lambda SnapStart</a>.</p>
     */
    snapStart?: CreateFunctionRequestBodySnapStart;
    /**
     * A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to apply to the function.
     */
    tags?: Record<string, string>;
    /**
     * The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html">Lambda execution environment</a>.
     */
    timeout?: number;
    /**
     * The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.
     */
    tracingConfig?: CreateFunctionRequestBodyTracingConfig;
    /**
     * The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>.
     */
    vpcConfig?: CreateFunctionRequestBodyVpcConfig;
}
export declare class CreateFunctionRequest extends SpeakeasyBase {
    requestBody: CreateFunctionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateFunctionResponse extends SpeakeasyBase {
    /**
     * CodeSigningConfigNotFoundException
     */
    codeSigningConfigNotFoundException?: any;
    /**
     * CodeStorageExceededException
     */
    codeStorageExceededException?: any;
    /**
     * CodeVerificationFailedException
     */
    codeVerificationFailedException?: any;
    contentType: string;
    /**
     * Success
     */
    functionConfiguration?: shared.FunctionConfiguration;
    /**
     * InvalidCodeSignatureException
     */
    invalidCodeSignatureException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
