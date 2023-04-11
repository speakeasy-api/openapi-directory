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
    accessDeniedException?: any;
    contentType: string;
    /**
     * IncompatibleSchemaException
     */
    incompatibleSchemaException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidAttachmentException
     */
    invalidAttachmentException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * SchemaAlreadyExistsException
     */
    schemaAlreadyExistsException?: any;
    /**
     * Success
     */
    upgradeAppliedSchemaResponse?: shared.UpgradeAppliedSchemaResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
