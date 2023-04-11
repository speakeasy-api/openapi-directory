import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionFilter } from "./dimensionfilter";
/**
 * The configuration of the alert filters.
 */
export declare class AlertFilters extends SpeakeasyBase {
    dimensionFilterList?: DimensionFilter[];
    metricList?: string[];
}
