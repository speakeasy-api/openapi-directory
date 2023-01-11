import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A set of filters to specify a whitelist for what types of events will be delivered.
**/
export declare class WebhookRequestFilters extends SpeakeasyBase {
    action?: string;
    fields?: string[];
    resourceSubtype?: string;
    resourceType?: string;
}
export declare class WebhookRequest extends SpeakeasyBase {
    filters?: WebhookRequestFilters[];
    resource: string;
    target: string;
}
