import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The instance metadata options that apply to the HTTP requests that pipeline builds use to launch EC2 build and test instances. For more information about instance metadata options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 User Guide</i> </i> for Linux instances, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i> for Windows instances.
 */
export declare class CreateInfrastructureConfigurationRequestBodyInstanceMetadataOptions extends SpeakeasyBase {
    httpPutResponseHopLimit?: number;
    httpTokens?: string;
}
/**
 * Logging configuration defines where Image Builder uploads your logs.
 */
export declare class CreateInfrastructureConfigurationRequestBodyLogging extends SpeakeasyBase {
    s3Logs?: shared.S3Logs;
}
export declare class CreateInfrastructureConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The idempotency token used to make this request idempotent.
     */
    clientToken: string;
    /**
     * The description of the infrastructure configuration.
     */
    description?: string;
    /**
     * The instance metadata options that apply to the HTTP requests that pipeline builds use to launch EC2 build and test instances. For more information about instance metadata options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 User Guide</i> </i> for Linux instances, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i> for Windows instances.
     */
    instanceMetadataOptions?: CreateInfrastructureConfigurationRequestBodyInstanceMetadataOptions;
    /**
     * The instance profile to associate with the instance used to customize your Amazon EC2 AMI.
     */
    instanceProfileName: string;
    /**
     * The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability.
     */
    instanceTypes?: string[];
    /**
     * The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image.
     */
    keyPair?: string;
    /**
     * Logging configuration defines where Image Builder uploads your logs.
     */
    logging?: CreateInfrastructureConfigurationRequestBodyLogging;
    /**
     * The name of the infrastructure configuration.
     */
    name: string;
    /**
     * The tags attached to the resource created by Image Builder.
     */
    resourceTags?: Record<string, string>;
    /**
     * The security group IDs to associate with the instance used to customize your Amazon EC2 AMI.
     */
    securityGroupIds?: string[];
    /**
     * <p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.</p> <note> <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under.</p> </note>
     */
    snsTopicArn?: string;
    /**
     * The subnet ID in which to place the instance used to customize your Amazon EC2 AMI.
     */
    subnetId?: string;
    /**
     * The tags of the infrastructure configuration.
     */
    tags?: Record<string, string>;
    /**
     * The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails.
     */
    terminateInstanceOnFailure?: boolean;
}
export declare class CreateInfrastructureConfigurationRequest extends SpeakeasyBase {
    requestBody: CreateInfrastructureConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateInfrastructureConfigurationResponse extends SpeakeasyBase {
    /**
     * CallRateLimitExceededException
     */
    callRateLimitExceededException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    createInfrastructureConfigurationResponse?: shared.CreateInfrastructureConfigurationResponse;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
