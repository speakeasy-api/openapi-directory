import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies whether the user can copy text from the streaming session to the local device.
 */
export declare enum CreateUserSettingsRequestBodyCopyAllowedEnum {
    Disabled = "Disabled",
    Enabled = "Enabled"
}
/**
 * Specifies whether the user can download files from the streaming session to the local device.
 */
export declare enum CreateUserSettingsRequestBodyDownloadAllowedEnum {
    Disabled = "Disabled",
    Enabled = "Enabled"
}
/**
 * Specifies whether the user can paste text from the local device to the streaming session.
 */
export declare enum CreateUserSettingsRequestBodyPasteAllowedEnum {
    Disabled = "Disabled",
    Enabled = "Enabled"
}
/**
 * Specifies whether the user can print to the local device.
 */
export declare enum CreateUserSettingsRequestBodyPrintAllowedEnum {
    Disabled = "Disabled",
    Enabled = "Enabled"
}
/**
 * Specifies whether the user can upload files from the local device to the streaming session.
 */
export declare enum CreateUserSettingsRequestBodyUploadAllowedEnum {
    Disabled = "Disabled",
    Enabled = "Enabled"
}
export declare class CreateUserSettingsRequestBody extends SpeakeasyBase {
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
     */
    clientToken?: string;
    /**
     * Specifies whether the user can copy text from the streaming session to the local device.
     */
    copyAllowed: CreateUserSettingsRequestBodyCopyAllowedEnum;
    /**
     * The amount of time that a streaming session remains active after users disconnect.
     */
    disconnectTimeoutInMinutes?: number;
    /**
     * Specifies whether the user can download files from the streaming session to the local device.
     */
    downloadAllowed: CreateUserSettingsRequestBodyDownloadAllowedEnum;
    /**
     * The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the disconnect timeout interval begins.
     */
    idleDisconnectTimeoutInMinutes?: number;
    /**
     * Specifies whether the user can paste text from the local device to the streaming session.
     */
    pasteAllowed: CreateUserSettingsRequestBodyPasteAllowedEnum;
    /**
     * Specifies whether the user can print to the local device.
     */
    printAllowed: CreateUserSettingsRequestBodyPrintAllowedEnum;
    /**
     * The tags to add to the user settings resource. A tag is a key-value pair.
     */
    tags?: shared.Tag[];
    /**
     * Specifies whether the user can upload files from the local device to the streaming session.
     */
    uploadAllowed: CreateUserSettingsRequestBodyUploadAllowedEnum;
}
export declare class CreateUserSettingsRequest extends SpeakeasyBase {
    requestBody: CreateUserSettingsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateUserSettingsResponse extends SpeakeasyBase {
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
    createUserSettingsResponse?: shared.CreateUserSettingsResponse;
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
