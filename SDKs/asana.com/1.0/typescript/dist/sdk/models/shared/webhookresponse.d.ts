import { SpeakeasyBase } from "../../../internal/utils";
import { AsanaNamedResource } from "./asananamedresource";
/**
 * A set of filters to specify a whitelist for what types of events will be delivered.
**/
export declare class WebhookResponseFilters extends SpeakeasyBase {
    action?: string;
    fields?: string[];
    resourceSubtype?: string;
    resourceType?: string;
}
/**
 * Webhook objects represent the state of an active subscription for a server to be updated with information from Asana. This schema represents the subscription itself, not the objects that are sent to the server. For information on those please refer to the [Event](/docs/tocS_Event) schema.
**/
export declare class WebhookResponse extends SpeakeasyBase {
    active?: boolean;
    createdAt?: Date;
    filters?: WebhookResponseFilters[];
    gid?: string;
    lastFailureAt?: Date;
    lastFailureContent?: string;
    lastSuccessAt?: Date;
    resource?: AsanaNamedResource;
    resourceType?: string;
    target?: string;
}
