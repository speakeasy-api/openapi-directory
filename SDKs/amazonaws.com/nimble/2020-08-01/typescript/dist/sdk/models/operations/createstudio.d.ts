import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Configuration of the encryption method that is used for the studio.
 */
export declare class CreateStudioRequestBodyStudioEncryptionConfiguration extends SpeakeasyBase {
    keyArn?: string;
    keyType?: shared.StudioEncryptionConfigurationKeyTypeEnum;
}
export declare class CreateStudioRequestBody extends SpeakeasyBase {
    /**
     * The IAM role that studio admins will assume when logging in to the Nimble Studio portal.
     */
    adminRoleArn: string;
    /**
     * A friendly name for the studio.
     */
    displayName: string;
    /**
     * Configuration of the encryption method that is used for the studio.
     */
    studioEncryptionConfiguration?: CreateStudioRequestBodyStudioEncryptionConfiguration;
    /**
     * The studio name that is used in the URL of the Nimble Studio portal when accessed by Nimble Studio users.
     */
    studioName: string;
    /**
     * A collection of labels, in the form of key-value pairs, that apply to this resource.
     */
    tags?: Record<string, string>;
    /**
     * The IAM role that studio users will assume when logging in to the Nimble Studio portal.
     */
    userRoleArn: string;
}
export declare class CreateStudioRequest extends SpeakeasyBase {
    requestBody: CreateStudioRequestBody;
    xAmzAlgorithm?: string;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.
     */
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStudioResponse extends SpeakeasyBase {
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
    createStudioResponse?: shared.CreateStudioResponse;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
