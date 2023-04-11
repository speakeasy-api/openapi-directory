import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure used to include auditing information on the privileged API.
 */
export declare class GetTemporaryGluePartitionCredentialsRequestBodyAuditContext extends SpeakeasyBase {
    additionalAuditContext?: string;
}
/**
 * Contains a list of values defining partitions.
 */
export declare class GetTemporaryGluePartitionCredentialsRequestBodyPartition extends SpeakeasyBase {
    values?: string[];
}
export declare class GetTemporaryGluePartitionCredentialsRequestBody extends SpeakeasyBase {
    /**
     * A structure used to include auditing information on the privileged API.
     */
    auditContext?: GetTemporaryGluePartitionCredentialsRequestBodyAuditContext;
    /**
     * The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.
     */
    durationSeconds?: number;
    /**
     * Contains a list of values defining partitions.
     */
    partition: GetTemporaryGluePartitionCredentialsRequestBodyPartition;
    /**
     * Filters the request based on the user having been granted a list of specified permissions on the requested resource(s).
     */
    permissions?: shared.PermissionEnum[];
    /**
     * A list of supported permission types for the partition. Valid values are <code>COLUMN_PERMISSION</code> and <code>CELL_FILTER_PERMISSION</code>.
     */
    supportedPermissionTypes: shared.PermissionTypeEnum[];
    /**
     * The ARN of the partitions' table.
     */
    tableArn: string;
}
export declare class GetTemporaryGluePartitionCredentialsRequest extends SpeakeasyBase {
    requestBody: GetTemporaryGluePartitionCredentialsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTemporaryGluePartitionCredentialsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getTemporaryGluePartitionCredentialsResponse?: shared.GetTemporaryGluePartitionCredentialsResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    /**
     * PermissionTypeMismatchException
     */
    permissionTypeMismatchException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
