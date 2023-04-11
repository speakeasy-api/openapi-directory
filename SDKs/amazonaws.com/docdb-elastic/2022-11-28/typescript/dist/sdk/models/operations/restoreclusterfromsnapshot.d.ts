import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RestoreClusterFromSnapshotRequestBody extends SpeakeasyBase {
    /**
     * The name of the Elastic DocumentDB cluster.
     */
    clusterName: string;
    /**
     * <p>The KMS key identifier to use to encrypt the new Elastic DocumentDB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key.</p> <p>If an encryption key is not specified here, Elastic DocumentDB uses the default encryption key that KMS creates for your account. Your account has a different default encryption key for each Amazon Region.</p>
     */
    kmsKeyId?: string;
    /**
     * The Amazon EC2 subnet IDs for the Elastic DocumentDB cluster.
     */
    subnetIds?: string[];
    /**
     * A list of the tag names to be assigned to the restored DB cluster, in the form of an array of key-value pairs in which the key is the tag name and the value is the key value.
     */
    tags?: Record<string, string>;
    /**
     * A list of EC2 VPC security groups to associate with the Elastic DocumentDB cluster.
     */
    vpcSecurityGroupIds?: string[];
}
export declare class RestoreClusterFromSnapshotRequest extends SpeakeasyBase {
    requestBody: RestoreClusterFromSnapshotRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The arn of the Elastic DocumentDB snapshot.
     */
    snapshotArn: string;
}
export declare class RestoreClusterFromSnapshotResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    restoreClusterFromSnapshotOutput?: shared.RestoreClusterFromSnapshotOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
