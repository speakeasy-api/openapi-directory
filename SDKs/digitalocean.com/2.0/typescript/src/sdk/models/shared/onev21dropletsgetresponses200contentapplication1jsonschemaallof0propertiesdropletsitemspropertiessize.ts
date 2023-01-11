import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesSize extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=disk" })
  disk: number;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory: number;

  @SpeakeasyMetadata({ data: "json, name=price_hourly" })
  priceHourly: number;

  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: number;

  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions: string[];

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=transfer" })
  transfer: number;

  @SpeakeasyMetadata({ data: "json, name=vcpus" })
  vcpus: number;
}
