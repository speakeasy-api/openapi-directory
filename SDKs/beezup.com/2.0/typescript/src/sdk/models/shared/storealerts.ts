import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StoreAlert } from "./storealert";



export class StoreAlerts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alerts", elemType: StoreAlert })
  alerts?: StoreAlert[];
}
