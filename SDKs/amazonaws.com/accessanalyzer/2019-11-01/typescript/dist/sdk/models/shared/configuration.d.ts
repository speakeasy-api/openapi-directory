import { SpeakeasyBase } from "../../../internal/utils";
import { IamRoleConfiguration } from "./iamroleconfiguration";
import { KmsKeyConfiguration } from "./kmskeyconfiguration";
import { S3BucketConfiguration } from "./s3bucketconfiguration";
import { SecretsManagerSecretConfiguration } from "./secretsmanagersecretconfiguration";
import { SqsQueueConfiguration } from "./sqsqueueconfiguration";
export declare class Configuration extends SpeakeasyBase {
    iamRole?: IamRoleConfiguration;
    kmsKey?: KmsKeyConfiguration;
    s3Bucket?: S3BucketConfiguration;
    secretsManagerSecret?: SecretsManagerSecretConfiguration;
    sqsQueue?: SqsQueueConfiguration;
}
