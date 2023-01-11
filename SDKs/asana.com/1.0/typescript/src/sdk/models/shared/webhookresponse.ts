import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AsanaNamedResource } from "./asananamedresource";



// WebhookResponseFilters
/** 
 * A set of filters to specify a whitelist for what types of events will be delivered.
**/
export class WebhookResponseFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string[];

  @SpeakeasyMetadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


// WebhookResponse
/** 
 * Webhook objects represent the state of an active subscription for a server to be updated with information from Asana. This schema represents the subscription itself, not the objects that are sent to the server. For information on those please refer to the [Event](/docs/tocS_Event) schema.
**/
export class WebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: WebhookResponseFilters })
  filters?: WebhookResponseFilters[];

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=last_failure_at" })
  lastFailureAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_failure_content" })
  lastFailureContent?: string;

  @SpeakeasyMetadata({ data: "json, name=last_success_at" })
  lastSuccessAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: AsanaNamedResource;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;
}
