import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StoreAlertProperty } from "./storealertproperty";



export class SaveStoreAlertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: StoreAlertProperty })
  properties?: StoreAlertProperty[];
}
