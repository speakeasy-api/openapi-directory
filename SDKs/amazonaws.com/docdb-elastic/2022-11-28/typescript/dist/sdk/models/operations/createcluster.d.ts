import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The authentication type for the Elastic DocumentDB cluster.
 */
export declare enum CreateClusterRequestBodyAuthTypeEnum {
    PlainText = "PLAIN_TEXT",
    SecretArn = "SECRET_ARN"
}
export declare class CreateClusterRequestBody extends SpeakeasyBase {
    /**
     * <p>The name of the Elastic DocumentDB cluster administrator.</p> <p> <i>Constraints</i>:</p> <ul> <li> <p>Must be from 1 to 63 letters or numbers.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot be a reserved word.</p> </li> </ul>
     */
    adminUserName: string;
    /**
     * <p>The password for the Elastic DocumentDB cluster administrator and can contain any printable ASCII characters.</p> <p> <i>Constraints</i>:</p> <ul> <li> <p>Must contain from 8 to 100 characters.</p> </li> <li> <p>Cannot contain a forward slash (/), double quote ("), or the "at" symbol (@).</p> </li> </ul>
     */
    adminUserPassword: string;
    /**
     * The authentication type for the Elastic DocumentDB cluster.
     */
    authType: CreateClusterRequestBodyAuthTypeEnum;
    /**
     * The client token for the Elastic DocumentDB cluster.
     */
    clientToken?: string;
    /**
     * <p>The name of the new Elastic DocumentDB cluster. This parameter is stored as a lowercase string.</p> <p> <i>Constraints</i>:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p> <i>Example</i>: <code>my-cluster</code> </p>
     */
    clusterName: string;
    /**
     * <p>The KMS key identifier to use to encrypt the new Elastic DocumentDB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key.</p> <p>If an encryption key is not specified, Elastic DocumentDB uses the default encryption key that KMS creates for your account. Your account has a different default encryption key for each Amazon Region.</p>
     */
    kmsKeyId?: string;
    /**
     * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> <i>Format</i>: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p> <i>Default</i>: a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.</p> <p> <i>Valid days</i>: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p> <i>Constraints</i>: Minimum 30-minute window.</p>
     */
    preferredMaintenanceWindow?: string;
    /**
     * The capacity of each shard in the new Elastic DocumentDB cluster.
     */
    shardCapacity: number;
    /**
     * The number of shards to create in the new Elastic DocumentDB cluster.
     */
    shardCount: number;
    /**
     * The Amazon EC2 subnet IDs for the new Elastic DocumentDB cluster.
     */
    subnetIds?: string[];
    /**
     * The tags to be assigned to the new Elastic DocumentDB cluster.
     */
    tags?: Record<string, string>;
    /**
     * A list of EC2 VPC security groups to associate with the new Elastic DocumentDB cluster.
     */
    vpcSecurityGroupIds?: string[];
}
export declare class CreateClusterRequest extends SpeakeasyBase {
    requestBody: CreateClusterRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateClusterResponse extends SpeakeasyBase {
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
     * Success
     */
    createClusterOutput?: shared.CreateClusterOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
