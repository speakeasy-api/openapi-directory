import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeOrderReporting } from "./changeorderreporting";
import { HarvestOrderReporting } from "./harvestorderreporting";
/**
 * Describe the history related to an order
**/
export declare class OrderHistory extends SpeakeasyBase {
    changeOrderReportings?: ChangeOrderReporting[];
    harvestOrderReportings?: HarvestOrderReporting[];
    lastModificationUtcDate?: Date;
}
