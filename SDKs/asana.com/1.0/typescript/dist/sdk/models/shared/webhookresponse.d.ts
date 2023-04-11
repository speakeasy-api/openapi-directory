import { SpeakeasyBase } from "../../../internal/utils";
import { AsanaNamedResource } from "./asananamedresource";
/**
 * A set of filters to specify a whitelist for what types of events will be delivered.
 */
export declare class WebhookResponseFilters extends SpeakeasyBase {
    /**
     * The type of change on the **resource** to pass through the filter. For more information refer to `Event.action` in the [Event](/docs/tocS_Event) schema. This can be one of `changed`, `added`, `removed`, `deleted`, and `undeleted` depending on the nature of what has occurred on the resource.
     */
    action?: string;
    /**
     * *Conditional.* A whitelist of fields for events which will pass the filter when the resource is changed. These can be any combination of the fields on the resources themselves. This field is only valid for `action` of type `changed`
     */
    fields?: string[];
    /**
     * The resource subtype of the resource that the filter applies to. This should be set to the same value as is returned on the `resource_subtype` field on the resources themselves.
     */
    resourceSubtype?: string;
    /**
     * The type of the resource which created the event when modified; for example, to filter to changes on regular tasks this field should be set to `task`.
     */
    resourceType?: string;
}
/**
 * Webhook objects represent the state of an active subscription for a server to be updated with information from Asana. This schema represents the subscription itself, not the objects that are sent to the server. For information on those please refer to the [Event](/docs/tocS_Event) schema.
 */
export declare class WebhookResponse extends SpeakeasyBase {
    /**
     * If true, the webhook will send events - if false it is considered inactive and will not generate events.
     */
    active?: boolean;
    /**
     * The time at which this resource was created.
     */
    createdAt?: Date;
    /**
     * Whitelist of filters to apply to events from this webhook. If a webhook event passes any of the filters the event will be delivered; otherwise no event will be sent to the receiving server.
     */
    filters?: WebhookResponseFilters[];
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The timestamp when the webhook last received an error when sending an event to the target.
     */
    lastFailureAt?: Date;
    /**
     * The contents of the last error response sent to the webhook when attempting to deliver events to the target.
     */
    lastFailureContent?: string;
    /**
     * The timestamp when the webhook last successfully sent an event to the target.
     */
    lastSuccessAt?: Date;
    resource?: AsanaNamedResource;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * The URL to receive the HTTP POST.
     */
    target?: string;
}
