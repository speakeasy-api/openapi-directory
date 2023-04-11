import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure used to include auditing information on the privileged API.
 */
export declare class GetTemporaryGlueTableCredentialsRequestBodyAuditContext extends SpeakeasyBase {
    additionalAuditContext?: string;
}
export declare class GetTemporaryGlueTableCredentialsRequestBody extends SpeakeasyBase {
    /**
     * A structure used to include auditing information on the privileged API.
     */
    auditContext?: GetTemporaryGlueTableCredentialsRequestBodyAuditContext;
    /**
     * The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.
     */
    durationSeconds?: number;
    /**
     * Filters the request based on the user having been granted a list of specified permissions on the requested resource(s).
     */
    permissions?: shared.PermissionEnum[];
    /**
     * A list of supported permission types for the table. Valid values are <code>COLUMN_PERMISSION</code> and <code>CELL_FILTER_PERMISSION</code>.
     */
    supportedPermissionTypes: shared.PermissionTypeEnum[];
    /**
     * The ARN identifying a table in the Data Catalog for the temporary credentials request.
     */
    tableArn: string;
}
export declare class GetTemporaryGlueTableCredentialsRequest extends SpeakeasyBase {
    requestBody: GetTemporaryGlueTableCredentialsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTemporaryGlueTableCredentialsResponse extends SpeakeasyBase {
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
    getTemporaryGlueTableCredentialsResponse?: shared.GetTemporaryGlueTableCredentialsResponse;
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
