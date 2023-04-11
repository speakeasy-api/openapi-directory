import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The authentication type for the Elastic DocumentDB cluster.
 */
export declare enum UpdateClusterRequestBodyAuthTypeEnum {
    PlainText = "PLAIN_TEXT",
    SecretArn = "SECRET_ARN"
}
export declare class UpdateClusterRequestBody extends SpeakeasyBase {
    /**
     * <p>The password for the Elastic DocumentDB cluster administrator. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).</p> <p> <i>Constraints</i>: Must contain from 8 to 100 characters.</p>
     */
    adminUserPassword?: string;
    /**
     * The authentication type for the Elastic DocumentDB cluster.
     */
    authType?: UpdateClusterRequestBodyAuthTypeEnum;
    /**
     * The client token for the Elastic DocumentDB cluster.
     */
    clientToken?: string;
    /**
     * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> <i>Format</i>: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p> <i>Default</i>: a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.</p> <p> <i>Valid days</i>: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p> <i>Constraints</i>: Minimum 30-minute window.</p>
     */
    preferredMaintenanceWindow?: string;
    /**
     * The capacity of each shard in the Elastic DocumentDB cluster.
     */
    shardCapacity?: number;
    /**
     * The number of shards to create in the Elastic DocumentDB cluster.
     */
    shardCount?: number;
    /**
     * The number of shards to create in the Elastic DocumentDB cluster.
     */
    subnetIds?: string[];
    /**
     * A list of EC2 VPC security groups to associate with the new Elastic DocumentDB cluster.
     */
    vpcSecurityGroupIds?: string[];
}
export declare class UpdateClusterRequest extends SpeakeasyBase {
    requestBody: UpdateClusterRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The arn of the Elastic DocumentDB cluster.
     */
    clusterArn: string;
}
export declare class UpdateClusterResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateClusterOutput?: shared.UpdateClusterOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
