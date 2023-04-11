import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookTriggers } from "./webhooktriggers";
/**
 * The version of webhook request to send to the endpoint URL
 */
export declare enum WebhookAttributesResponseVersionEnum {
    V1 = "v1",
    V2 = "v2"
}
export declare class WebhookAttributes extends SpeakeasyBase {
    /**
     * Timestamp when webhook configuration was added to system.
     */
    created?: Date;
    /**
     * The endpoint is where the webhook request will be sent.
     */
    endpointUrl?: string;
    /**
     * Whether webhook has been disabled for too many consecutive failures
     */
    failed?: boolean;
    /**
     * Timestamp when webhook configuration was last modified
     */
    modified?: Date;
    /**
     * The version of webhook request to send to the endpoint URL
     */
    responseVersion?: WebhookAttributesResponseVersionEnum;
    triggers?: WebhookTriggers;
    /**
     * Token for verifying sender is ExaVault
     */
    verificationToken?: string;
}
