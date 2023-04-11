import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookAttributes } from "./webhookattributes";
export declare class WebhookRelationshipsOwnerAccountData extends SpeakeasyBase {
    /**
     * Account ID
     */
    id?: number;
    /**
     * Type of thing it is "account"
     */
    type?: string;
}
export declare class WebhookRelationshipsOwnerAccount extends SpeakeasyBase {
    data?: WebhookRelationshipsOwnerAccountData;
}
export declare class WebhookRelationshipsResourceData extends SpeakeasyBase {
    /**
     * ID of the resource associated with the webhook
     */
    id?: number;
    /**
     * Type of thing it is. "resource"
     */
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
    /**
     * Type of thing it is. "webhook"
     */
    type?: string;
}
