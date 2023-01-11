import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebhookRequestFilters
/** 
 * A set of filters to specify a whitelist for what types of events will be delivered.
**/
export class WebhookRequestFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string[];

  @SpeakeasyMetadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class WebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: WebhookRequestFilters })
  filters?: WebhookRequestFilters[];

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: string;
}
