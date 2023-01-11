import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookTriggers } from "./webhooktriggers";
export declare enum WebhookAttributesResponseVersionEnum {
    V1 = "v1",
    V2 = "v2"
}
export declare class WebhookAttributes extends SpeakeasyBase {
    created?: Date;
    endpointUrl?: string;
    failed?: boolean;
    modified?: Date;
    responseVersion?: WebhookAttributesResponseVersionEnum;
    triggers?: WebhookTriggers;
    verificationToken?: string;
}
