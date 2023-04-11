import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * Represents the input to <a>DescribePendingMaintenanceActions</a>.
 */
export declare class DescribePendingMaintenanceActionsMessage extends SpeakeasyBase {
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
    resourceIdentifier?: string;
}
