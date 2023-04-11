import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpgradePublishedSchemaRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the development schema with the changes used for the upgrade.
     */
    developmentSchemaArn: string;
    /**
     * Used for testing whether the Development schema provided is backwards compatible, or not, with the publish schema provided by the user to be upgraded. If schema compatibility fails, an exception would be thrown else the call would succeed. This parameter is optional and defaults to false.
     */
    dryRun?: boolean;
    /**
     * Identifies the minor version of the published schema that will be created. This parameter is NOT optional.
     */
    minorVersion: string;
    /**
     * The ARN of the published schema to be upgraded.
     */
    publishedSchemaArn: string;
}
export declare class UpgradePublishedSchemaRequest extends SpeakeasyBase {
    requestBody: UpgradePublishedSchemaRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpgradePublishedSchemaResponse extends SpeakeasyBase {
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
     * LimitExceededException
     */
    limitExceededException?: any;
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
     * Success
     */
    upgradePublishedSchemaResponse?: shared.UpgradePublishedSchemaResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
