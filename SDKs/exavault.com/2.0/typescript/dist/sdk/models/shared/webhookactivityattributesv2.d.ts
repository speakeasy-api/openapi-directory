import { SpeakeasyBase } from "../../../internal/utils";
import { AccessMode } from "./accessmode";
import { ShareMessage } from "./sharemessage";
import { ShareRecipient } from "./sharerecipient";
export declare class WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources extends SpeakeasyBase {
    /**
     * Date and time resource was most recently downloaded
     */
    accessedAt?: Date;
    /**
     * Date and time of resource creation
     */
    createdAt?: Date;
    /**
     * Username who originally created resource
     */
    createdBy?: string;
    /**
     * Number of resources contained in this folder. If this is a file, fileCount is null
     */
    fileCount?: number;
    /**
     * Resource hash value
     */
    hash?: string;
    /**
     * Resource ID
     */
    id?: number;
    /**
     * Resource name
     */
    name?: string;
    /**
     * Full path to resource
     */
    path?: string;
    /**
     * Whether the resource can be previewed
     */
    previewable?: boolean;
    /**
     * Size of resource in bytes
     */
    size?: number;
    /**
     * Type of resource `file` or `dir`
     */
    type?: string;
    /**
     * Date and time resource was most recently changed
     */
    updatedAt?: Date;
    /**
     * Date resource was first uploaded
     */
    uploadDate?: Date;
}
export declare class WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare extends SpeakeasyBase {
    /**
     * Human readable description of what visitors are allowed to do with the receive folder
     */
    accessDescription?: string;
    /**
     * An object defining what a not-logged-in visitor can do with the share contents
     */
    accessMode?: AccessMode;
    /**
     * List of items included in the share
     */
    assets?: string[];
    /**
     * Date and ti
     */
    created?: Date;
    /**
     * Whether the receive folder can be embedded within a web page
     */
    embed?: boolean;
    /**
     * Date and time when the receive folder will no longer be
     */
    expiration?: string;
    /**
     * Whether access to the receive folder has expired
     */
    expired?: boolean;
    /**
     * Whether files should be automatically placed in subfolders of the receive folder
     */
    fileDropCreateFolders?: boolean;
    /**
     * ID of the associated form
     */
    formId?: number;
    /**
     * Whether delivery receipts are enabled for this share
     */
    hasNotification?: boolean;
    /**
     * Whether the receive folder requires visitors to enter a password
     */
    hasPassword?: boolean;
    /**
     * Hash value of the receive
     */
    hash?: string;
    /**
     * Unique ID of associated receive folder
     */
    id?: number;
    /**
     * Whether this share is inherited from a parent fol
     */
    inherited?: boolean;
    /**
     * Whether visitors can acccess the receive folder without an invitation link
     */
    isPublic?: boolean;
    /**
     * Invitation messages sent for receive folder
     */
    messages?: ShareMessage[];
    /**
     * Date and time when the share was last changed
     */
    modified?: Date;
    /**
     * Name of receiv
     */
    name?: string;
    /**
     * Hash value of the user who "owns" the receive fo
     */
    ownerHash?: string;
    /**
     * List
     */
    paths?: string[];
    /**
     * List of recipients invited  to the receive folder
     */
    recipients?: ShareRecipient[];
    /**
     * Whether visitors must enter their email addresses to access the receive folder
     */
    requireEmail?: boolean;
    /**
     * Whether invitations to the receive folder have been re-sent to recipients
     */
    resent?: boolean;
    /**
     * 1 if share is active. 0 if not.
     */
    status?: number;
    /**
     * Status of invitations sent for this receive folder
     */
    trackingStatus?: string;
    /**
     * Type of share **"receive"**
     */
    type?: string;
}
export declare class WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData extends SpeakeasyBase {
    formDetails?: Record<string, any>[];
    resources?: WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources[];
    share?: WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare[];
    /**
     * For uploads, and downloads, whether the file transferred OK. `success` means the transfer did not have errors
     */
    transferStatus?: string;
}
export declare class WebhookActivityAttributesV2WebhookV2Details extends SpeakeasyBase {
    /**
     * Account master username
     */
    accountName?: string;
    /**
     * Entry - retry identifier
     */
    attemptId?: string;
    /**
     * Type of related activity
     */
    event?: string;
    eventData?: WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData;
    /**
     * Date and time event originally took place
     */
    eventTimestamp?: Date;
    /**
     * IP address of related activity
     */
    ipAddress?: string;
    /**
     * Type of connection used for related activity
     */
    protocol?: string;
    /**
     * Username logged for related activity. May refer to someone who is not a user of the account, such as a share recipient or "publ
     */
    username?: string;
}
/**
 * Event type
 */
export declare enum WebhookActivityAttributesV2EventEnum {
    ResourcesUpload = "resources.upload",
    ResourcesDownload = "resources.download",
    ResourcesDelete = "resources.delete",
    ResourcesRename = "resources.rename",
    ResourcesCopy = "resources.copy",
    ResourcesMove = "resources.move",
    ResourcesCompress = "resources.compress",
    ResourcesExtract = "resources.extract",
    ResourcesCreateFolder = "resources.createFolder",
    SharesFormSubmit = "shares.formSubmit"
}
export declare class WebhookActivityAttributesV2 extends SpeakeasyBase {
    /**
     * Unique ID of account
     */
    accountId?: string;
    /**
     * Event - retry identifier
     */
    attemptId?: string;
    /**
     * Date and time of webhook message being generated by system
     */
    created?: string;
    details?: WebhookActivityAttributesV2WebhookV2Details;
    /**
     * The URL the message was sent to
     */
    endpointUrl?: string;
    /**
     * Event type
     */
    event?: WebhookActivityAttributesV2EventEnum;
    /**
     * IP Address of related activity
     */
    ipAddress?: string;
    /**
     * Whether this attempt was a re-send of a previous attempt
     */
    resend?: boolean;
    /**
     * Path of resource that matched webhook
     */
    resourcePath?: string;
    /**
     * Body of web response returned by webhook listener
     */
    response?: string;
    /**
     * HTTP Status Code returned by webhook listener
     */
    status?: number;
    /**
     * Username of related activity
     */
    username?: string;
    /**
     * What version of webhook message is being sent `v2`
     */
    webhookFormat?: string;
    /**
     * Unique ID of webhook configuration
     */
    webhookId?: number;
    /**
     * Path that webhook is watching
     */
    webhookPath?: string;
}
