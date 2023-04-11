import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpgradeAppliedSchemaRequestBody extends SpeakeasyBase {
    /**
     * The ARN for the directory to which the upgraded schema will be applied.
     */
    directoryArn: string;
    /**
     * Used for testing whether the major version schemas are backward compatible or not. If schema compatibility fails, an exception would be thrown else the call would succeed but no changes will be saved. This parameter is optional.
     */
    dryRun?: boolean;
    /**
     * The revision of the published schema to upgrade the directory to.
     */
    publishedSchemaArn: string;
}
export declare class UpgradeAppliedSchemaRequest extends SpeakeasyBase {
    requestBody: UpgradeAppliedSchemaRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpgradeAppliedSchemaResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    /**
     * IncompatibleSchemaException
     */
    incompatibleSchemaException?: shared.IncompatibleSchemaException;
    /**
     * InternalServiceException
     */
    internalServiceException?: shared.InternalServiceException;
    /**
     * InvalidArnException
     */
    invalidArnException?: shared.InvalidArnException;
    /**
     * InvalidAttachmentException
     */
    invalidAttachmentException?: shared.InvalidAttachmentException;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: shared.ResourceNotFoundException;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    upgradeAppliedSchemaResponse?: shared.UpgradeAppliedSchemaResponse;
    /**
     * ValidationException
     */
    validationException?: shared.ValidationException;
}
