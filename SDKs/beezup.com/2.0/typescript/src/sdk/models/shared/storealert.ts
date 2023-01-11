import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StoreAlertLinks } from "./storealertlinks";
import { StoreAlertPropertyInfo } from "./storealertpropertyinfo";



export class StoreAlert extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertId" })
  alertId: number;

  @SpeakeasyMetadata({ data: "json, name=alertName" })
  alertName: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: StoreAlertLinks;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: StoreAlertPropertyInfo })
  properties?: StoreAlertPropertyInfo[];
}
