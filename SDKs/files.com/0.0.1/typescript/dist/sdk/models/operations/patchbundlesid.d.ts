import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Permissions that apply to Folders in this Share Link.
 */
export declare enum PatchBundlesIdRequestBodyPermissionsEnum {
    Read = "read",
    Write = "write",
    ReadWrite = "read_write",
    Full = "full",
    None = "none",
    PreviewOnly = "preview_only"
}
export declare class PatchBundlesIdRequestBodyWatermarkAttachmentFile extends SpeakeasyBase {
    content: Uint8Array;
    watermarkAttachmentFile: string;
}
export declare class PatchBundlesIdRequestBody extends SpeakeasyBase {
    /**
     * ID of the clickwrap to use with this bundle.
     */
    clickwrapId?: number;
    /**
     * Bundle code.  This code forms the end part of the Public URL.
     */
    code?: string;
    /**
     * Public description
     */
    description?: string;
    /**
     * Do not create subfolders for files uploaded to this share. Note: there are subtle security pitfalls with allowing anonymous uploads from multiple users to live in the same folder. We strongly discourage use of this option unless absolutely required.
     */
    dontSeparateSubmissionsByFolder?: boolean;
    /**
     * Bundle expiration date/time
     */
    expiresAt?: Date;
    /**
     * Id of Form Field Set to use with this bundle
     */
    formFieldSetId?: number;
    /**
     * ID of the associated inbox, if available.
     */
    inboxId?: number;
    /**
     * Maximum number of times bundle can be accessed
     */
    maxUses?: number;
    /**
     * Bundle internal note
     */
    note?: string;
    /**
     * Password for this bundle.
     */
    password?: string;
    /**
     * Template for creating submission subfolders. Can use the uploader's name, email address, ip, company, and any custom form data.
     */
    pathTemplate?: string;
    /**
     * A list of paths to include in this bundle.
     */
    paths?: string[];
    /**
     * Permissions that apply to Folders in this Share Link.
     */
    permissions?: PatchBundlesIdRequestBodyPermissionsEnum;
    /**
     * Restrict users to previewing files only?
     */
    previewOnly?: boolean;
    /**
     * Show a registration page that captures the downloader's name and email address?
     */
    requireRegistration?: boolean;
    /**
     * Only allow access to recipients who have explicitly received the share via an email sent through the Files.com UI?
     */
    requireShareRecipient?: boolean;
    /**
     * Send delivery receipt to the uploader. Note: For writable share only
     */
    sendEmailReceiptToUploader?: boolean;
    /**
     * BundleRegistrations can be saved without providing company?
     */
    skipCompany?: boolean;
    /**
     * BundleRegistrations can be saved without providing email?
     */
    skipEmail?: boolean;
    /**
     * BundleRegistrations can be saved without providing name?
     */
    skipName?: boolean;
    /**
     * If true, will delete the file stored in watermark_attachment
     */
    watermarkAttachmentDelete?: boolean;
    /**
     * Preview watermark image applied to all bundle items.
     */
    watermarkAttachmentFile?: PatchBundlesIdRequestBodyWatermarkAttachmentFile;
}
export declare class PatchBundlesIdRequest extends SpeakeasyBase {
    requestBody?: PatchBundlesIdRequestBody;
    /**
     * Bundle ID.
     */
    id: number;
}
export declare class PatchBundlesIdResponse extends SpeakeasyBase {
    /**
     * The Bundles object.
     */
    bundleEntity?: shared.BundleEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
