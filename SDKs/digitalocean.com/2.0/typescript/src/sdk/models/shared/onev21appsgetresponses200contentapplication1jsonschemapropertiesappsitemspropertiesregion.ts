import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsPropertiesRegion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continent" })
  continent?: string;

  @SpeakeasyMetadata({ data: "json, name=data_centers" })
  dataCenters?: string[];

  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=flag" })
  flag?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;
}
