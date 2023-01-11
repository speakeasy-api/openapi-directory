import { SpeakeasyBase } from "../../../internal/utils";
import { AccessMode } from "./accessmode";
import { ShareMessage } from "./sharemessage";
import { ShareRecipient } from "./sharerecipient";
export declare enum ShareAttributesTrackingStatusEnum {
    Complete = "complete",
    Incomplete = "incomplete",
    Pending = "pending"
}
export declare enum ShareAttributesTypeEnum {
    SharedFolder = "shared_folder",
    Send = "send",
    Receive = "receive"
}
/**
 * Attributes of the share including the name, path and share recipients.
**/
export declare class ShareAttributes extends SpeakeasyBase {
    accessDescription?: string;
    accessMode?: AccessMode;
    created?: Date;
    embed?: boolean;
    expiration?: string;
    expired?: boolean;
    fileDropCreateFolders?: boolean;
    formId?: number;
    hasNotification?: boolean;
    hasPassword?: boolean;
    hash?: string;
    inherited?: boolean;
    messages?: ShareMessage[];
    modified?: Date;
    name?: string;
    ownerHash?: string;
    paths?: string[];
    public?: boolean;
    recipients?: ShareRecipient[];
    requireEmail?: boolean;
    resent?: Date;
    status?: number;
    trackingStatus?: ShareAttributesTrackingStatusEnum;
    type?: ShareAttributesTypeEnum;
}
