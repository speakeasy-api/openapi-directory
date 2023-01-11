import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksSaveStoreAlertsLink } from "./linkssavestorealertslink";



// StoreAlertLinks
/** 
 * The different actions you can make on this alert
**/
export class StoreAlertLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=save" })
  save?: LinksSaveStoreAlertsLink;
}
