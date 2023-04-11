import { SpeakeasyBase } from "../../../internal/utils";
import { AccessMode } from "./accessmode";
import { ShareMessage } from "./sharemessage";
import { ShareRecipient } from "./sharerecipient";
/**
 * True if the share has expired.
 */
export declare enum ShareAttributesExpiredEnum {
    True = "true",
    False = "false"
}
/**
 * Flag to show if separate folders should be created for each file upload to receive folder.
 */
export declare enum ShareAttributesFileDropCreateFoldersEnum {
    True = "true",
    False = "false"
}
/**
 * True if share has notification.
 */
export declare enum ShareAttributesHasNotificationEnum {
    True = "true",
    False = "false"
}
/**
 * True if the share has password.
 */
export declare enum ShareAttributesHasPasswordEnum {
    True = "true",
    False = "false"
}
/**
 * True if share inherited from parent folder.
 */
export declare enum ShareAttributesInheritedEnum {
    True = "true",
    False = "false"
}
/**
 * True if the share has a public url.
 */
export declare enum ShareAttributesPublicEnum {
    True = "true",
    False = "false"
}
/**
 * Share activity status. Can be active (1) or deactivated (0).
 */
export declare enum ShareAttributesStatusEnum {
    Zero = "0",
    One = "1"
}
/**
 * Checks recipient received status and returns whether it's been received (`complete`,) partial received (`incomplete`,) or not received yet (`pending`.)
 */
export declare enum ShareAttributesTrackingStatusEnum {
    Complete = "complete",
    Incomplete = "incomplete",
    Pending = "pending"
}
/**
 * Type of share.
 */
export declare enum ShareAttributesTypeEnum {
    SharedFolder = "shared_folder",
    Send = "send",
    Receive = "receive"
}
/**
 * Attributes of the share including the name, path and share recipients.
 */
export declare class ShareAttributes extends SpeakeasyBase {
    /**
     * Description of the share access rights.
     */
    accessDescription?: string;
    /**
     * An object defining what a not-logged-in visitor can do with the share contents
     */
    accessMode?: AccessMode;
    /**
     * Timestamp of share creation.
     */
    created?: Date;
    /**
     * True if share can be embedded.
     */
    embed?: boolean;
    /**
     * Expiration date of the share.
     */
    expiration?: string;
    /**
     * True if the share has expired.
     */
    expired?: ShareAttributesExpiredEnum;
    /**
     * Flag to show if separate folders should be created for each file upload to receive folder.
     */
    fileDropCreateFolders?: ShareAttributesFileDropCreateFoldersEnum;
    /**
     * ID of the form.
     */
    formId?: number;
    /**
     * True if share has notification.
     */
    hasNotification?: ShareAttributesHasNotificationEnum;
    /**
     * True if the share has password.
     */
    hasPassword?: ShareAttributesHasPasswordEnum;
    /**
     * Share hash.
     */
    hash?: string;
    /**
     * True if share inherited from parent folder.
     */
    inherited?: ShareAttributesInheritedEnum;
    /**
     * Array of invitation messages.
     */
    messages?: ShareMessage[];
    /**
     * Timestamp of share modification. Can be `null` if it wasn't modified.
     */
    modified?: Date;
    /**
     * Share name.
     */
    name?: string;
    /**
     * Share owner's hash.
     */
    ownerHash?: string;
    /**
     * Path to the shared resource in your account.
     */
    paths?: string[];
    /**
     * True if the share has a public url.
     */
    public?: ShareAttributesPublicEnum;
    /**
     * Array of recipients.
     */
    recipients?: ShareRecipient[];
    /**
     * True if share requires email to access.
     */
    requireEmail?: boolean;
    /**
     * Invitations resent date. Can be `null` if resent never happened.
     */
    resent?: Date;
    /**
     * Share activity status. Can be active (1) or deactivated (0).
     */
    status?: ShareAttributesStatusEnum;
    /**
     * Checks recipient received status and returns whether it's been received (`complete`,) partial received (`incomplete`,) or not received yet (`pending`.)
     */
    trackingStatus?: ShareAttributesTrackingStatusEnum;
    /**
     * Type of share.
     */
    type?: ShareAttributesTypeEnum;
}
