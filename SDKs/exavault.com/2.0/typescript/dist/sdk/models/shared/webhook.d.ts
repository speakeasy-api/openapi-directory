import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookAttributes } from "./webhookattributes";
export declare class WebhookRelationshipsOwnerAccountData extends SpeakeasyBase {
    id?: number;
    type?: string;
}
export declare class WebhookRelationshipsOwnerAccount extends SpeakeasyBase {
    data?: WebhookRelationshipsOwnerAccountData;
}
export declare class WebhookRelationshipsResourceData extends SpeakeasyBase {
    id?: number;
    type?: string;
}
export declare class WebhookRelationshipsResource extends SpeakeasyBase {
    data?: WebhookRelationshipsResourceData;
}
export declare class WebhookRelationships extends SpeakeasyBase {
    ownerAccount?: WebhookRelationshipsOwnerAccount;
    resource?: WebhookRelationshipsResource;
}
export declare class Webhook extends SpeakeasyBase {
    attributes?: WebhookAttributes;
    id?: number;
    relationships?: WebhookRelationships;
    type?: string;
}
