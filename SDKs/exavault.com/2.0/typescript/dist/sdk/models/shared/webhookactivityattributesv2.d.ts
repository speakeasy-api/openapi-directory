import { SpeakeasyBase } from "../../../internal/utils";
import { AccessMode } from "./accessmode";
import { ShareMessage } from "./sharemessage";
import { ShareRecipient } from "./sharerecipient";
export declare class WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources extends SpeakeasyBase {
    accessedAt?: Date;
    createdAt?: Date;
    createdBy?: string;
    fileCount?: number;
    hash?: string;
    id?: number;
    name?: string;
    path?: string;
    previewable?: boolean;
    size?: number;
    type?: string;
    updatedAt?: Date;
    uploadDate?: Date;
}
export declare class WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare extends SpeakeasyBase {
    accessDescription?: string;
    accessMode?: AccessMode;
    assets?: string[];
    created?: Date;
    embed?: boolean;
    expiration?: string;
    expired?: boolean;
    fileDropCreateFolders?: boolean;
    formId?: number;
    hasNotification?: boolean;
    hasPassword?: boolean;
    hash?: string;
    id?: number;
    inherited?: boolean;
    isPublic?: boolean;
    messages?: ShareMessage[];
    modified?: Date;
    name?: string;
    ownerHash?: string;
    paths?: string[];
    recipients?: ShareRecipient[];
    requireEmail?: boolean;
    resent?: boolean;
    status?: number;
    trackingStatus?: string;
    type?: string;
}
export declare class WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData extends SpeakeasyBase {
    formDetails?: Record<string, any>[];
    resources?: WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources[];
    share?: WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare[];
    transferStatus?: string;
}
export declare class WebhookActivityAttributesV2WebhookV2Details extends SpeakeasyBase {
    accountName?: string;
    attemptId?: string;
    event?: string;
    eventData?: WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData;
    eventTimestamp?: Date;
    ipAddress?: string;
    protocol?: string;
    username?: string;
}
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
    accountId?: string;
    attemptId?: string;
    created?: string;
    details?: WebhookActivityAttributesV2WebhookV2Details;
    endpointUrl?: string;
    event?: WebhookActivityAttributesV2EventEnum;
    ipAddress?: string;
    resend?: boolean;
    resourcePath?: string;
    response?: string;
    status?: number;
    username?: string;
    webhookFormat?: string;
    webhookId?: number;
    webhookPath?: string;
}
