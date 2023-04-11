import { SpeakeasyBase } from "../../../internal/utils";
import { EbsSnapshotConfiguration } from "./ebssnapshotconfiguration";
import { EcrRepositoryConfiguration } from "./ecrrepositoryconfiguration";
import { EfsFileSystemConfiguration } from "./efsfilesystemconfiguration";
import { IamRoleConfiguration } from "./iamroleconfiguration";
import { KmsKeyConfiguration } from "./kmskeyconfiguration";
import { RdsDbClusterSnapshotConfiguration } from "./rdsdbclustersnapshotconfiguration";
import { RdsDbSnapshotConfiguration } from "./rdsdbsnapshotconfiguration";
import { S3BucketConfiguration } from "./s3bucketconfiguration";
import { SecretsManagerSecretConfiguration } from "./secretsmanagersecretconfiguration";
import { SnsTopicConfiguration } from "./snstopicconfiguration";
import { SqsQueueConfiguration } from "./sqsqueueconfiguration";
/**
 * Access control configuration structures for your resource. You specify the configuration as a type-value pair. You can specify only one type of access control configuration.
 */
export declare class Configuration extends SpeakeasyBase {
    ebsSnapshot?: EbsSnapshotConfiguration;
    ecrRepository?: EcrRepositoryConfiguration;
    efsFileSystem?: EfsFileSystemConfiguration;
    iamRole?: IamRoleConfiguration;
    kmsKey?: KmsKeyConfiguration;
    rdsDbClusterSnapshot?: RdsDbClusterSnapshotConfiguration;
    rdsDbSnapshot?: RdsDbSnapshotConfiguration;
    s3Bucket?: S3BucketConfiguration;
    secretsManagerSecret?: SecretsManagerSecretConfiguration;
    snsTopic?: SnsTopicConfiguration;
    sqsQueue?: SqsQueueConfiguration;
}
