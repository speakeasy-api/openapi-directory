import { SpeakeasyBase } from "../../../internal/utils";
export declare class WebhookTriggersResources extends SpeakeasyBase {
    /**
     * Send webhook messages when resources are compressed into an archive.
     */
    compress?: boolean;
    /**
     * Send webhook messages when resources are copied.
     */
    copy?: boolean;
    /**
     * Send webhook messages when a new folder is created.
     */
    createFolder?: boolean;
    /**
     * Send webhook messages when resources are deleted
     */
    delete?: boolean;
    /**
     * Send webhook messages when resources are downloaded.
     */
    download?: boolean;
    /**
     * Send webhook messages when resources are extracted from an archive.
     */
    extract?: boolean;
    /**
     * Send webhook messages when resources are moved.
     */
    move?: boolean;
    /**
     * Send webhook messages when resources are renamed.
     */
    rename?: boolean;
    /**
     * Send webhook messages when resources are uploaded.
     */
    upload?: boolean;
}
export declare class WebhookTriggersShares extends SpeakeasyBase {
    /**
     * Send webhook messages when a receive folder form is submitted.
     */
    formSubmit?: boolean;
}
export declare class WebhookTriggers extends SpeakeasyBase {
    resources?: WebhookTriggersResources;
    shares?: WebhookTriggersShares;
}
