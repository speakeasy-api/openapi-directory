import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlertsSlack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string[];

  @SpeakeasyMetadata({ data: "json, name=slack", elemType: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlertsSlack })
  slack: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlertsSlack[];
}
