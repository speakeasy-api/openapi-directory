import { SpeakeasyBase } from "../../../internal/utils";
import { AwsLambdaFunctionCode } from "./awslambdafunctioncode";
import { AwsLambdaFunctionDeadLetterConfig } from "./awslambdafunctiondeadletterconfig";
import { AwsLambdaFunctionEnvironment } from "./awslambdafunctionenvironment";
import { AwsLambdaFunctionLayer } from "./awslambdafunctionlayer";
import { AwsLambdaFunctionTracingConfig } from "./awslambdafunctiontracingconfig";
import { AwsLambdaFunctionVpcConfig } from "./awslambdafunctionvpcconfig";
/**
 * Details about an Lambda function's configuration.
 */
export declare class AwsLambdaFunctionDetails extends SpeakeasyBase {
    architectures?: string[];
    code?: AwsLambdaFunctionCode;
    codeSha256?: string;
    deadLetterConfig?: AwsLambdaFunctionDeadLetterConfig;
    environment?: AwsLambdaFunctionEnvironment;
    functionName?: string;
    handler?: string;
    kmsKeyArn?: string;
    lastModified?: string;
    layers?: AwsLambdaFunctionLayer[];
    masterArn?: string;
    memorySize?: number;
    packageType?: string;
    revisionId?: string;
    role?: string;
    runtime?: string;
    timeout?: number;
    tracingConfig?: AwsLambdaFunctionTracingConfig;
    version?: string;
    vpcConfig?: AwsLambdaFunctionVpcConfig;
}
