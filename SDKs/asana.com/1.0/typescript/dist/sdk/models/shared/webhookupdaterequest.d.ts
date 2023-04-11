import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A set of filters to specify a whitelist for what types of events will be delivered.
 */
export declare class WebhookUpdateRequestFilters extends SpeakeasyBase {
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
export declare class WebhookUpdateRequest extends SpeakeasyBase {
    /**
     * An array of WebhookFilter objects to specify a whitelist of filters to apply to events from this webhook. If a webhook event passes any of the filters the event will be delivered; otherwise no event will be sent to the receiving server.
     */
    filters?: WebhookUpdateRequestFilters[];
}
