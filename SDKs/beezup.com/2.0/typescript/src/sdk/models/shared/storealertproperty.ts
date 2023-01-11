import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoreAlertProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=propertyId" })
  propertyId: number;

  @SpeakeasyMetadata({ data: "json, name=propertyValue" })
  propertyValue: string;
}
