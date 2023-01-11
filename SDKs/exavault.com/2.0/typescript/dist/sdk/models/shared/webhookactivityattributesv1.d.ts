import { SpeakeasyBase } from "../../../internal/utils";
export declare class WebhookActivityAttributesV1WebhookV1Details extends SpeakeasyBase {
    accountName?: string;
    attempt?: number;
    attemptId?: string;
    event?: string;
    protocol?: string;
    username?: string;
}
export declare enum WebhookActivityAttributesV1EventEnum {
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
export declare class WebhookActivityAttributesV1 extends SpeakeasyBase {
    accountId?: string;
    attemptId?: string;
    created?: string;
    details?: WebhookActivityAttributesV1WebhookV1Details;
    endpointUrl?: string;
    event?: WebhookActivityAttributesV1EventEnum;
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
