import { SpeakeasyBase } from "../../../internal/utils";
import { FormFieldSetEntity } from "./formfieldsetentity";
import { ImageEntity } from "./imageentity";
/**
 * Permissions that apply to Folders in this Share Link.
 */
export declare enum BundleEntityPermissionsEnum {
    Read = "read",
    Write = "write",
    ReadWrite = "read_write",
    Full = "full",
    None = "none",
    PreviewOnly = "preview_only"
}
/**
 * Create Bundle
 */
export declare class BundleEntity extends SpeakeasyBase {
    /**
     * Legal text that must be agreed to prior to accessing Bundle.
     */
    clickwrapBody?: string;
    /**
     * ID of the clickwrap to use with this bundle.
     */
    clickwrapId?: number;
    /**
     * Bundle code.  This code forms the end part of the Public URL.
     */
    code?: string;
    /**
     * Bundle created at date/time
     */
    createdAt?: Date;
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
     * List Form Field Sets
     */
    formFieldSet?: FormFieldSetEntity;
    /**
     * Does this bundle have an associated inbox?
     */
    hasInbox?: boolean;
    /**
     * Bundle ID
     */
    id?: number;
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
     * Is this bundle password protected?
     */
    passwordProtected?: boolean;
    /**
     * Template for creating submission subfolders. Can use the uploader's name, email address, ip, company, and any custom form data.
     */
    pathTemplate?: string;
    /**
     * A list of paths in this bundle
     */
    paths?: string[];
    /**
     * Permissions that apply to Folders in this Share Link.
     */
    permissions?: BundleEntityPermissionsEnum;
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
     * Public URL of Share Link
     */
    url?: string;
    /**
     * Bundle creator user ID
     */
    userId?: number;
    /**
     * Bundle creator username
     */
    username?: string;
    watermarkAttachment?: ImageEntity;
    /**
     * Preview watermark settings applied to all bundle items. Uses the same keys as Behavior.value
     */
    watermarkValue?: Record<string, any>;
}
