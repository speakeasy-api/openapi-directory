import { SpeakeasyBase } from "../../../internal/utils";
export declare class WebhookTriggersResources extends SpeakeasyBase {
    compress?: boolean;
    copy?: boolean;
    createFolder?: boolean;
    delete?: boolean;
    download?: boolean;
    extract?: boolean;
    move?: boolean;
    rename?: boolean;
    upload?: boolean;
}
export declare class WebhookTriggersShares extends SpeakeasyBase {
    formSubmit?: boolean;
}
export declare class WebhookTriggers extends SpeakeasyBase {
    resources?: WebhookTriggersResources;
    shares?: WebhookTriggersShares;
}
