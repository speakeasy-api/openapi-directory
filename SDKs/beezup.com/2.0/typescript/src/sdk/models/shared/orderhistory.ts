import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangeOrderReporting } from "./changeorderreporting";
import { HarvestOrderReporting } from "./harvestorderreporting";



// OrderHistory
/** 
 * Describe the history related to an order
**/
export class OrderHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeOrderReportings", elemType: ChangeOrderReporting })
  changeOrderReportings?: ChangeOrderReporting[];

  @SpeakeasyMetadata({ data: "json, name=harvestOrderReportings", elemType: HarvestOrderReporting })
  harvestOrderReportings?: HarvestOrderReporting[];

  @SpeakeasyMetadata({ data: "json, name=lastModificationUtcDate" })
  lastModificationUtcDate?: Date;
}
