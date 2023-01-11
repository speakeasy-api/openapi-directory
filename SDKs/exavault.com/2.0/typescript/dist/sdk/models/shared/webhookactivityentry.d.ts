import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WebhookActivityEntryTypeEnum {
    WebhookActivity = "webhookActivity"
}
export declare class WebhookActivityEntry extends SpeakeasyBase {
    attributes?: any;
    id?: number;
    type?: WebhookActivityEntryTypeEnum;
}
