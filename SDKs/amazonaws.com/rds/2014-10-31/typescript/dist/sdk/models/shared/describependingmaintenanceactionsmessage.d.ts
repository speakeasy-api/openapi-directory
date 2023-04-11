import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * <p/>
 */
export declare class DescribePendingMaintenanceActionsMessage extends SpeakeasyBase {
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
    resourceIdentifier?: string;
}
