import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeOrderReporting } from "./changeorderreporting";
import { HarvestOrderReporting } from "./harvestorderreporting";
/**
 * Describe the history related to an order
 */
export declare class OrderHistory extends SpeakeasyBase {
    /**
     * The list of change order operation
     */
    changeOrderReportings?: ChangeOrderReporting[];
    harvestOrderReportings?: HarvestOrderReporting[];
    lastModificationUtcDate?: Date;
}
